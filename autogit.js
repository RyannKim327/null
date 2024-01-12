fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Process the retrieved data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error('Error:', error);
  });
