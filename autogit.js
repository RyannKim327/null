fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Do something with the retrieved data
  })
  .catch(error => {
    console.log('An error occurred:', error);
  });
