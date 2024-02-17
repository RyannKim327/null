// Make a GET request to a public API
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    // Log the data to the console
    console.log(data);
  })
  .catch(error => console.error(error));
