// Fetch data from an API
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Process the fetched data
    console.log(data);
    // Do something with the data...
  })
  .catch(error => {
    console.log('An error occurred:', error);
  });
