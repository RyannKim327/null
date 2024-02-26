// Define the API endpoint
const apiUrl = 'https://api.example.com/data';

// Fetch data from the API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Process the data
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
