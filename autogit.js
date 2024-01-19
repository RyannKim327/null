fetch('https://api.example.com/data') // Replace 'https://api.example.com/data' with your desired API endpoint
  .then(response => response.json())
  .then(data => {
    // Do something with the data received from the API
    console.log(data);
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });
