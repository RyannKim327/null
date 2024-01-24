// Fetch data from an API
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Process the received data
    console.log(data);
    // Do something with the data here...
  })
  .catch(error => {
    console.error('Error:', error);
  });
