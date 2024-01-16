// Make a GET request to the Chuck Norris API
fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => {
    // Print the Chuck Norris joke to the console
    console.log(data.value);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.log('An error occurred:', error);
  });
