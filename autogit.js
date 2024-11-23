import tweepy

# API credentials
CONSUMER_KEY = 'your_consumer_key'
CONSUMER_SECRET = 'your_consumer_secret'
ACCESS_TOKEN = 'your_access_token'
ACCESS_TOKEN_SECRET = 'your_access_token_secret'

def authenticate():
    auth = tweepy.OAuth1Handler(CONSUMER_KEY, CONSUMER_SECRET)
    auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
    api = tweepy.API(auth)
    return api

def fetch_tweets(query, count=10):
    api = authenticate()
    tweets = api.search_tweets(q=query, count=count)
    for tweet in tweets:
        print(tweet.text)

if __name__ == '__main__':
    fetch_tweets('python', 5)
