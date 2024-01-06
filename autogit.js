fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Here, you can work with the received data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error(error);
  });
