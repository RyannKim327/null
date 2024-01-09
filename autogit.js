// Define the API endpoint URL
const apiUrl = 'https://api.example.com/data';

// Function to fetch data from the API
async function fetchData() {
  try {
    const response = await fetch(apiUrl); // Make a network request to the API
    const data = await response.json(); // Parse the JSON response
    console.log(data); // Display the fetched data
  } catch (error) {
    console.log('Error fetching data:', error);
  }
}

// Call the fetchData function to fetch data from the API
fetchData();
