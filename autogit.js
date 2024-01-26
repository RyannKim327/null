fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Process the retrieved data here
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Error:', error);
  });
