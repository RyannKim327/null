// Make a GET request to an API endpoint

fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    // Use the data returned by the API
    console.log(data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
