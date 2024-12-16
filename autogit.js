import requests

city = "London"
api_key = "YOUR_API_KEY"
url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"

response = requests.get(url)
data = response.json()

if data["cod"] == 200:
    temp = data["main"]["temp"]
    weather_desc = data["weather"][0]["description"]
    print(f"The current temperature in {city} is {temp}°C with {weather_desc}.")
else:
    print("Error fetching weather data.")
