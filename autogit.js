// Fetch data from an API
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => {
    // Use the fetched data
    console.log(data);

    // Perform additional operations here
    // ...
  })
  .catch(error => {
    console.log("An error occurred:", error);
  });
