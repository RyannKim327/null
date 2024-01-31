// Make a GET request to an API endpoint
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Process the fetched data
    console.log('Fetched data:', data);

    // Do something with the data
    // ...
  })
  .catch(error => {
    // Handle any errors that occur during the fetch
    console.error('Error:', error);
  });
