// Make a GET request to the Chuck Norris API
fetch("https://api.chucknorris.io/jokes/random")
  .then(response => response.json())
  .then(data => {
    // Display the Chuck Norris joke in the console
    console.log(data.value);
  })
  .catch(error => {
    console.log("An error occurred:", error);
  });
