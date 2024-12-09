# Import requests library
import requests

# API endpoint URL
url = 'https://api.example.com/data'

# Make a GET request to the API endpoint
response = requests.get(url)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    data = response.json()  # Extract JSON data from response
    print(data)  # Display the data
else:
    print('Failed to fetch data from the API')
