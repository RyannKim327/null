import requests

# Define the API endpoint URL
url = 'https://api.example.com/data'

# Make a GET request to the API endpoint
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    # Extract and print the JSON data from the response
    data = response.json()
    print(data)
else:
    print('Error: Failed to retrieve data from the API')
