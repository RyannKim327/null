// Fetch data from a public API
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    // Display the fetched data in the console
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
