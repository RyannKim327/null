// Make an HTTP GET request to an API
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Display the response data
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
