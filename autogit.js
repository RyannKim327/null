const apiUrl = 'https://api.example.com/data'; // Replace with your API URL

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Do something with the data received from the API
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.log(error);
  });
