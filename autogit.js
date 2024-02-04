fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Do something with the returned data
  })
  .catch(error => {
    console.log('Error:', error);
  });
