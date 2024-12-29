import tweepy

# Setup Twitter API credentials
consumer_key = 'your_consumer_key'
consumer_secret = 'your_consumer_secret'
access_token = 'your_access_token'
access_token_secret = 'your_access_token_secret'

# Authenticate with Twitter API
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)

# Fetch tweets from user's timeline
user = api.get_user(screen_name='twitterusername')
tweets = api.user_timeline(screen_name=user.screen_name, count=10)

# Print tweets
for tweet in tweets:
    print(tweet.text)
