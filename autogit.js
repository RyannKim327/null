// Make an API request
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Process the returned data
    console.log(data);
    // Perform any operations you want with the data
    // ...
  })
  .catch(error => {
    // Handle any errors that occur during the API request
    console.error('Error:', error);
  });
