// API endpoint example
const apiUrl = 'https://api.example.com/data';

// Make a GET request to the API endpoint
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Display the API response data
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
