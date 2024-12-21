import requests

api_key = 'YOUR_API_KEY'
city = 'London'
url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}'

response = requests.get(url)
data = response.json()

if response.status_code == 200:
    print(f"Weather in {data['name']}: {data['weather'][0]['description']}")
    print(f"Temperature: {data['main']['temp']} Kelvin")
    print(f"Humidity: {data['main']['humidity']}%")
else:
    print("Error fetching data from API.")
