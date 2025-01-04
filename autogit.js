import requests

# API endpoint
url = 'https://api.example.com/data'

# Make a GET request to the API endpoint
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    data = response.json()
    
    # Process the data here
    print(data)
else:
    print('Error: Failed to retrieve data from the API')
