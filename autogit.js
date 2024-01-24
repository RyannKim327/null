fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Handle the data obtained from the response
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch request
    console.error('Error:', error);
  });
