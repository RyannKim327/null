// Make a GET request to an API endpoint
fetch('https://api.example.com/data')
  .then(response => response.json()) // Parse response as JSON
  .then(data => {
    // Use the data received from the API
    console.log(data);

    // Display the data on a webpage
    const resultElement = document.getElementById('result');
    resultElement.textContent = JSON.stringify(data);
  })
  .catch(error => {
    // Handle any errors that occurred while fetching the data
    console.log('Error:', error);
  });
