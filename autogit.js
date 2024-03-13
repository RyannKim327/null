// API endpoint
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Make a GET request to the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Output the response data to the console
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
