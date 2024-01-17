// Make a GET request to the API endpoint
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Process the API response data
    console.log(data);

    // Do something with the data
    // ...

  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });
