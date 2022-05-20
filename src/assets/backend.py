import os
import pprint
from functools import reduce

import yfinance as yf
from cjs import CJS


BACKEND_DIR = os.path.abspath(os.path.dirname(__file__))
HOLDINGS = os.path.join(BACKEND_DIR, 'holdings.json')
STOCKS_DATA_PATH = os.path.join(BACKEND_DIR, 'stocks')

pp = pprint.PrettyPrinter(indent=4)
helper = CJS()
holdings = helper.load(HOLDINGS)


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
    print('tick tock!')


def fetch_all_tickers_data():
    tickers = yf.Tickers(list(holdings.keys()))
    for symbol in tickers.symbols:
        print(f'fetching stock data for {symbol}...')
        save_stock_data(symbol, tickers.tickers[symbol])
        print('tick tock!')


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
    helper.dump(stock_data, f'{BACKEND_DIR}/stocks-data.json')
    return stock_data


def combine_stock_news():
    stock_news = {}
    for ticker in holdings:
        try:
            stock_news.update(helper.load(os.path.join(STOCKS_DATA_PATH, f'{ticker}-news.json')))
        except Exception as e:
            print(e)
    stock_news = list(stock_news.values())
    stock_news.sort(key=lambda x: x['providerPublishTime'], reverse=True)
    # helper.dump(stock_news, 'stocks-news.text')
    return stock_news


def calculate_data(portfolio: list):
    for stock in portfolio:
        shares_owned = map(lambda holding: holding.sharesOwned, stock.holdings)
        total_shares_owned = reduce( lambda a, b: a + b, shares_owned)
        total_cost = map(lambda holding: holding.costAverage * holding.sharesOwned, stock.holdings)
        total_cost = reduce(lambda a, b: a + b, total_cost)
        stock_row = {
            'symbol': stock.symbol,
            'sharesOwned': total_shares_owned,
            'costAverage': total_cost/total_shares_owned,
            'marketPrice': stock.price.regularMarketPrice,
            'costBasis': total_cost,
            'marketValue': stock.price.regularMarketPrice * total_shares_owned,
            'payoutRatio': stock.summaryDetail.payoutRatio * 100,
            'exDivDate': stock.summaryDetail.exDividendDate * 1000
        }

        if stock.quoteType.quoteType == 'EQUITY':
            stock_row['yield'] = stock.summaryDetail.dividendRate or 0
            stock_row['yieldPercent'] = stock.summaryDetail.dividendYield * 100 or 0
            stock_row['sector'] = stock.summaryProfile.sector
            stock_row['analysis'] = stock.financialData.recommendationKey.split('_').join(' ')
        else:
            stock_row['yield'] = stock.summaryDetail.yield * stock_row.marketPrice or 0
            stock_row['yieldPercent'] = stock.summaryDetail.yield * 100 or 0
            stock_row['sector'] = 'N/A'
            stock_row['analysis'] = 'None'
        
        stock_row['gainLoss'] = (stock_row.marketPrice - stock_row.costAverage) * stock_row.sharesOwned
        stock_row['glPercent'] = (stock_row.marketPrice - stock_row.costAverage) / stock_row.costAverage * 100
        stock_row['glPercent'] = !isFinite(stock_row.glPercent) ? 100 : stock_row.glPercent
        stock_row['yieldOnCost'] = stock_row.yield / stock_row.costAverage * 100 or 0
        year = new Date().getFullYear();
        stock_row.exDivDate = stock_row.exDivDate.endsWith(year) ? stock_row.exDivDate : '';
        stock_row.stats = stock;
        return stock_row;


if __name__ == '__main__':
    # stock_data = load_stock_data()
    # stock_news = load_stock_news()
    # pp.pprint(stock_news)

    combine_stock_data()
    # combine_stock_news()

