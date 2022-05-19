import os
import pprint
import yfinance as yf
from cjs import CJS


APP_DIR = os.path.abspath(os.path.dirname(__file__))
HOLDINGS = os.path.join(APP_DIR, 'holdings.json')
STOCKS_DATA_PATH = os.path.join(APP_DIR, 'data')

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

def load_stock_data():
    stock_data = {}
    for ticker in holdings.keys():
        try:
            ticker_data = helper.load(os.path.join(STOCKS_DATA_PATH, f'{ticker}-stats.json'))
        except FileNotFoundError:
            print(f'fetching missing data for {symbol}...')
            fetch_one_ticker_data(ticker)
            ticker_data = helper.load(os.path.join(STOCKS_DATA_PATH, f'{ticker}-stats.json'))
        stock_data[ticker] = {**ticker_data, 'holdings': holdings[ticker]}
    return stock_data

def load_stock_news():
    stock_news = {}
    for ticker in holdings:
        try:
            stock_news.update(helper.load(os.path.join(STOCKS_DATA_PATH, f'{ticker}-news.json')))
        except Exception as e:
            print(e)
    stock_news = list(stock_news.values())
    stock_news.sort(key=lambda x: x['providerPublishTime'], reverse=True)
    return stock_news

if __name__ == '__main__':
    stock_data = load_stock_data()
    stock_news = load_stock_news()
    pp.pprint(stock_news)

    
    
    