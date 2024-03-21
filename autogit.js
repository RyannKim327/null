// Make a GET request to an API
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    // Log the data received from the API
    console.log(data);
  })
  .catch(error => {
    // Log any errors that occur during the request
    console.error('Error:', error);
  });
