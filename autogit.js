// Define the URL of the API
const url = 'https://jsonplaceholder.typicode.com/posts';

// Fetch data from the API
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Output the data to the console
    // You can now work with the data retrieved from the API
  })
  .catch(error => {
    console.error('Error:', error);
  });
