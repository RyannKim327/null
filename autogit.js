import requests

# Define the API endpoint URL
url = "https://api.example.com/data"

# Make a GET request to the API endpoint
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print("Failed to fetch data from the API")
