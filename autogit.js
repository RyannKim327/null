fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Use the fetched data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors during the fetch
    console.log('Error:', error);
  });
