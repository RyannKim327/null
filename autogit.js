// Define the API endpoint URL
const apiUrl = 'https://api.example.com/data';

// Fetch data from the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Use the fetched data
    console.log(data);
    // Do something with the data here
  })
  .catch(error => {
    console.log('Error fetching data from API:', error);
  });
