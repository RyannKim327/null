// Make a GET request to an API endpoint
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Do something with the API response data
    console.log(data);
    // Display the response on the HTML page
    document.getElementById('response').innerText = JSON.stringify(data);
  })
  .catch(error => {
    console.log('Error:', error);
  });
