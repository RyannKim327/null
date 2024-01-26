// Function to perform the async GET request
async function fetchData(url) {
  try {
    const response = await fetch(url); // Perform the GET request
    if (response.ok) {
      const data = await response.json(); // Parse the response as JSON
      console.log(data); // Do something with the data
    } else {
      console.error('Request failed with status:', response.status);
    }
  } catch (error) {
    console.error('Request failed with error:', error);
  }
}

// Call the fetchData function with the desired URL
const url = 'https://api.example.com/data';
fetchData(url);
