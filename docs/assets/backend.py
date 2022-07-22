import os
import pprint
import time
from functools import reduce
from datetime import datetime

import yfinance as yf
from cjs import CJS


BACKEND_DIR = os.path.abspath(os.path.dirname(__file__))
HOLDINGS = os.path.join(BACKEND_DIR, 'holdings.json')
HOLDINGS_CSV = os.path.join(BACKEND_DIR, 'holdings.csv')
STOCKS_DATA_PATH = os.path.join(BACKEND_DIR, 'stocks')

watchlist = ['PG', 'KO', 'VTRS', 'VICI', 'SBUX', 'CHTR', 'BAC', 'MMM', 'HD', 'JNJ', 'MO', 'AMZN', 'JPM', 'COST']

pp = pprint.PrettyPrinter(indent=4)
helper = CJS()
holdings = helper.load(HOLDINGS)
holdings_csv = helper.load(HOLDINGS_CSV)


def save_stock_data(symbol, data):
    try:
        helper.dump(data.stats(), os.path.join(STOCKS_DATA_PATH, f'{symbol}-stats.json'))
    except AttributeError as ae:
        print(symbol, ae, 'stats')
    try:
        news_dict = {item['uuid']: item for item in data.get_news()}
        helper.dump(news_dict, os.path.join(STOCKS_DATA_PATH, f'{symbol}-news.json'))
    except AttributeError as ae:
        print(symbol, ae, 'news')


def fetch_one_ticker_data(symbol):
    print(f'fetching stock data for {symbol}...')
    save_stock_data(symbol, yf.Ticker(symbol))
    print('tick tock, tick tock, tick tock!')
    time.sleep(3)


def fetch_all_tickers_data():
    tickers = yf.Tickers(list(holdings.keys()))
    for symbol in tickers.symbols:
        print(f'fetching stock data for {symbol}...')
        save_stock_data(symbol, tickers.tickers[symbol])
        print('tick tock, tick tock, tick tock!')
        time.sleep(3)


def fetch_watchlist_tickers_data():
    tickers = yf.Tickers(watchlist)
    for ticker in watchlist:
        print(f'fetching watchlist data for {ticker}...')
        save_stock_data(ticker, tickers.tickers[ticker])
        print('tick tock, tick tock, tick tock!')
        time.sleep(3)


def combine_watchlist_data():
    watchlist_data = {}
    for ticker in watchlist:
        try:
            ticker_data = helper.load(os.path.join(STOCKS_DATA_PATH, f'{ticker}-stats.json'))
        except FileNotFoundError:
            print(f'fetching missing data for {ticker}...')
            fetch_one_ticker_data(ticker)
            ticker_data = helper.load(os.path.join(STOCKS_DATA_PATH, f'{ticker}-stats.json'))
        watchlist_data[ticker] = ticker_data
    return watchlist_data


def combine_stock_data():
    stock_data = {}
    for ticker in holdings.keys():
        try:
            ticker_data = helper.load(os.path.join(STOCKS_DATA_PATH, f'{ticker}-stats.json'))
        except FileNotFoundError:
            print(f'fetching missing data for {ticker}...')
            fetch_one_ticker_data(ticker)
            ticker_data = helper.load(os.path.join(STOCKS_DATA_PATH, f'{ticker}-stats.json'))
        stock_data[ticker] = {**ticker_data, 'holdings': holdings[ticker]}
    return stock_data


def combine_stock_news():
    news = []
    for ticker in holdings:
        try:
            news.extend(helper.load(os.path.join(STOCKS_DATA_PATH, f'{ticker}-news.json')).values())
        except Exception as e:
            print(e)
    news.sort(key=lambda x: x['providerPublishTime'], reverse=True)
    portfolio_news = {item['uuid']: item for item in news}
    helper.dump(portfolio_news, f'{BACKEND_DIR}/stock-news.json')
    return portfolio_news


def calculate_row_data(portfolio):
    stock_rows = {}
    for stock in portfolio.values():
        stock_row = {}
        if stock['quoteType']['quoteType'] == 'EQUITY':
            stock_row['yield'] = stock['summaryDetail']['dividendRate'] or 0
            stock_row['yieldPercent'] = (stock['summaryDetail']['dividendYield'] or 0) * 100
            stock_row['sector'] = stock['summaryProfile']['sector']
            stock_row['analysis'] = ' '.join(stock['financialData']['recommendationKey'].split('_'))
        else:
            stock_row['yield'] = stock['summaryDetail']['yield'] * stock['price']['regularMarketPrice']
            stock_row['yieldPercent'] = (stock['summaryDetail']['yield'] or 0) * 100
            stock_row['sector'] = 'N/A'
            stock_row['analysis'] = 'None'
        try:
            shares_owned = map(lambda holding: holding['shares'], stock['holdings'])
            total_shares_owned = reduce(lambda a, b: a + b, shares_owned)
            total_cost = map(lambda holding: holding['costAverage'] * holding['shares'], stock['holdings'])
            total_cost = reduce(lambda a, b: a + b, total_cost)
            stock_row.update({
                'shares': total_shares_owned,
                'costAverage': total_cost / total_shares_owned,
                'costBasis': total_cost,
                'marketPrice': stock['price']['regularMarketPrice']
            })
            stock_row['marketValue'] = stock['price']['regularMarketPrice'] * total_shares_owned
            stock_row['profit'] = (stock_row['marketPrice'] - stock_row['costAverage']) * stock_row['shares']
            stock_row['profitPercent'] = (stock_row['marketPrice'] - stock_row['costAverage']) / stock_row['costAverage'] * 100
            try:
                stock_row['yieldOnCost'] = stock_row['yield'] / stock_row['costAverage'] * 100
                stock_row['dividendIncome'] = stock_row['yield'] * stock_row['shares']
            except Exception as e:
                stock_row['yieldOnCost'] = 0
                stock_row['dividendIncome'] = 0
                print(stock['symbol'], e)
        except Exception:
            stock_row['marketPrice'] = stock['price']['regularMarketPrice']
        try:
            ex_div_date = datetime.fromtimestamp(stock['summaryDetail']['exDividendDate']).strftime("%m/%d/%y, %H:%M:%S")
        except TypeError:
            ex_div_date = ''
        stock_row['symbol'] = stock['symbol']
        stock_row['payoutRatio'] = (stock['summaryDetail']['payoutRatio'] or 0) * 100
        stock_row['exDivDate'] = ex_div_date.split(',')[0]
        stock_row['stats'] = stock
        stock_rows[stock['symbol']] = stock_row
        print(stock['symbol'], stock_row.keys())

    return stock_rows


if __name__ == '__main__':
    print('Working the magic...\n')

    # fetch_all_tickers_data()
    # fetch_watchlist_tickers_data()

    stock_data = combine_stock_data()
    stock_news = combine_stock_news()
    stock_rows = calculate_row_data(stock_data)
    helper.dump(stock_rows, f'{BACKEND_DIR}/stock-rows.json')

    watchlist_data = combine_watchlist_data()
    watchlist_rows = calculate_row_data(watchlist_data)
    helper.dump(watchlist_rows, f'{BACKEND_DIR}/watchlist-rows.json')

    # columns, *rows = holdings_csv[:-1]
    # stock_row_data = dict.fromkeys(columns)
    # for i in range(len(rows)):
    #     stock_row_data[columns[i]] = rows[i]
    # print(stock_row_data)

    print('done!')
