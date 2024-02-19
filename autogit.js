// URL of the API endpoint
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Make a GET request to the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Log the data returned by the API
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data: ', error);
  });
