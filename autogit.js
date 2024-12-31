import requests

response = requests.get('https://randomuser.me/api/')
data = response.json()

# Display the randomly generated user data
print(data)
