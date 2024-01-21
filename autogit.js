// Fetch data from API
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Process the response data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.log('An error occurred:', error);
  });
