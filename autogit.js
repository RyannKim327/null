fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Process the fetched data here
    console.log(data);
  })
  .catch(err => {
    // Handle any errors that occurred during the fetch
    console.error('Error:', err);
  });
