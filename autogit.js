// Make a GET request to an API endpoint
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Process the received data
    console.log(data);
    // Do something with the data
    // ...
  })
  .catch(error => {
    console.error('Error:', error);
  });
