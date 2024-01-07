// Function to fetch weather info using API
async function fetchWeatherInfo(location) {
  const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Extract relevant information from the API response
    const weather = data.weather[0].main;
    const temperature = data.main.temp;

    console.log(`Weather in ${location}: ${weather}`);
    console.log(`Temperature: ${temperature}°C`);
  } catch (error) {
    console.log('An error occurred while fetching weather data:', error.message);
  }
}

// Call the fetchWeatherInfo function with a location
const location = 'London'; // Replace with your desired location
fetchWeatherInfo(location);
