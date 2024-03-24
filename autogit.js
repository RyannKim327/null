// API endpoint
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'YOUR_API_KEY'; // You need to replace this with your own API key

// City name
const city = 'London';

// Fetch data from the API
fetch(`${apiUrl}?q=${city}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // You can now do whatever you want with the data, for example:
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    console.log(`Temperature in ${city}: ${temperature} Kelvin`);
    console.log(`Weather description in ${city}: ${description}`);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
