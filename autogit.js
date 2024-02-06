fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Display the data or perform other operations
  })
  .catch(error => {
    console.log('Error:', error);
    // Handle the error
  });
