// Define the API endpoint
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Make a fetch request to the API endpoint
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log('API Data:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
