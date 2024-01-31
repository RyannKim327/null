// Make a GET request to an API endpoint
fetch('https://api.example.com/data')
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
    // Process the data returned from API
    console.log(data);
    
    // ... Do something with the data ...
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch request
    console.error('Error:', error);
  });
