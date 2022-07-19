import yfinance as yf
import pprint
pp = pprint.PrettyPrinter(indent=4)

stocks = ['frt', 'spg', 'stor']
tickers = yf.Tickers(stocks)

# pp.pprint(dir(tickers))
# pp.pprint(dir(tickers.tickers))

all_news = tickers.news()
for article in all_news.get('FRT'):
    # pp.pprint(article)
    print(article['type'], article['title'])
    print(article['link'])
    print(article['publisher'], article['providerPublishTime'])
    print(article['relatedTickers'])
    try:
        thumbnail = article['thumbnail']['resolutions'][0]
        print(thumbnail['tag'], thumbnail['url'])
    except Exception:
        continue
    print('\n')
