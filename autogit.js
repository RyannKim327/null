import requests

# Define the API endpoint URL
url = 'https://api.example.com/data'

# Set your API key here
api_key = 'API_KEY'

# Set any required parameters
params = {
    'param1': 'value1',
    'param2': 'value2'
}

# Make a GET request to the API endpoint
response = requests.get(url, params=params, headers={'Authorization': f'Bearer {api_key}'})

# Check if the request was successful
if response.status_code == 200:
    # Print the response data
    print(response.json())
else:
    print('Error occurred:', response.status_code, response.text)
