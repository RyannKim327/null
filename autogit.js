// Make a GET request to an API endpoint using fetch
fetch('https://api.example.com/data')
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
    // Handle the data returned from the API
    console.log(data);
    // Your code logic goes here
  })
  .catch(error => {
    // Handle any errors that occur during the API call
    console.error('Error:', error);
  });
