// Define the API endpoint URL
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Fetch data from the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Log the received data
    console.log(data);
  })
  .catch(error => {
    // Log any errors that occur during the fetch
    console.error('Error fetching data:', error);
  });
