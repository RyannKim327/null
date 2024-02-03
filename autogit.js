// Make an HTTP GET request using fetch
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Process the received data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });
