// Fetch data from API
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Process the fetched data
    console.log(data);
    // Perform further actions with the data
    // ...
  })
  .catch(error => {
    console.error('Error:', error);
  });
