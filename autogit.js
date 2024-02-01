fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log('Received data:', data);
    // Do something with the data here
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
