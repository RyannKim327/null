import requests

api_key = 'your_api_key_here'
city = 'New York'
url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}'

response = requests.get(url)
data = response.json()

if data['cod'] == 200:
    temperature = data['main']['temp']
    description = data['weather'][0]['description']
    print(f'Temperature in {city}: {temperature}K')
    print(f'Weather description: {description}')
else:
    print('Error fetching data')
