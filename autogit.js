import requests

# Make a GET request to a public API
response = requests.get("https://api.publicapis.org/random")

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Extract and print the response data
    data = response.json()
    print(data)
else:
    print("Failed to fetch data from API")
