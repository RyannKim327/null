import axios from 'axios';

const apiKey = 'YOUR_API_KEY_HERE';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather(city) {
  try {
    const response = await axios.get(`${apiUrl}?q=${city}&appid=${apiKey}`);
    const data = response.data;
    console.log(`The weather in ${city} is ${data.weather[0].main} with a temperature of ${data.main.temp}°C`);
  } catch (error) {
    console.error(error);
  }
}

getWeather('New York');
