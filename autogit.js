// API endpoint for getting random quotes
const apiUrl = 'https://api.quotable.io/random';

// Fetch data from the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Display the random quote in the console
    console.log(`Random Quote: ${data.content} - ${data.author}`);
  })
  .catch(error => {
    console.log('An error occurred while fetching the data:', error);
  });
