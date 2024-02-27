// API endpoint to fetch random data
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Function to fetch data from the API
async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the fetchData function to retrieve data from the API
fetchData();
