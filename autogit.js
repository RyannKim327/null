fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log('Data:', data);
    // Do something with the retrieved data
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle any errors that occurred during the API call
  });
