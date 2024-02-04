// Fetching data from an API
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Do something with the fetched data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error(error);
  });
