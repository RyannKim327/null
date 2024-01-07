fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Do something with the fetched data
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
