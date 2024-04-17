// Define the URL of the API
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Make a GET request to the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
