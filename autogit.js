fetch('https://api.example.com/random')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Do whatever you want with the fetched data
  })
  .catch(error => {
    console.log('Error:', error);
  });
