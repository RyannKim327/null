// Send a GET request to a server and retrieve the response
fetch('https://api.example.com/data')
  .then(response => response.json()) // Convert the response to JSON format
  .then(data => {
    // Handle the data received
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch request
    console.log('Error:', error);
  });
