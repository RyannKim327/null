import requests

# API endpoint URL
url = 'https://jsonplaceholder.typicode.com/posts/1'

# Making a GET request to the API
response = requests.get(url)

# Checking if the request was successful
if response.status_code == 200:
    # Printing the response content
    print(response.json())
else:
    print('An error occurred with status code:', response.status_code)
