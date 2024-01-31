fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Print the API response data to the console
    // Do something with the data...
  })
  .catch(error => {
    console.log('Error:', error);
    // Handle the error...
  });
