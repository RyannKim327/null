// Function to make API request
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error:', error);
  }
}

// Example API endpoint
const apiUrl = 'https://api.example.com/data';

// Call the API and process the data
fetchData(apiUrl)
  .then((data) => {
    // Do something with the fetched data
    console.log(data);
  })
  .catch((error) => {
    console.log('Error:', error);
  });
