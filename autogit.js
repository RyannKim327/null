import requests

# Set your API key from OpenWeatherMap
API_KEY = "YOUR_API_KEY_HERE"

def get_current_weather(city, api_key):
    base_url = "http://api.openweathermap.org/data/2.5/weather"
    params = {
        "q": city,
        "units": "imperial",
        "appid": api_key
    }
    response = requests.get(base_url, params=params)
    data = response.json()
    return data

def print_weather(data):
    print("Current weather in", data["name"])
    print("Temperature:", data["main"]["temp"], "°F")
    print("Humidity:", data["main"]["humidity"], "%")
    print("Wind speed:", data["wind"]["speed"], "mph")
    print("Description:", data["weather"][0]["description"])

city = "New York"
data = get_current_weather(city, API_KEY)
print_weather(data)
