import requests

# Define the API endpoint
url = "https://api.example.com"

# Make a GET request to the API
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    # Print the response from the API
    print(response.json())
else:
    print("Error: Unable to connect to the API")
