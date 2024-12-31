import requests

api_key = 'YOUR_API_KEY'
city = 'New York'

url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}'
response = requests.get(url)
data = response.json()

if data['cod'] == 200:
    temp = data['main']['temp']
    print(f'The current temperature in {city} is {temp} Kelvin.')
else:
    print(f'Error: {data["message"]}')
