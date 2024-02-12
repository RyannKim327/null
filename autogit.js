// Example API endpoint
const apiEndpoint = 'https://api.example.com/data';

// Function to make an API request
async function fetchDataFromAPI() {
  try {
    const response = await fetch(apiEndpoint);
    const data = await response.json();
    
    // Do something with the data
    console.log(data);
    
    // Call another function to process the data
    processAPIResponse(data);
  } catch (error) {
    console.error('Failed to fetch data from the API:', error);
  }
}

// Function to process the API response
function processAPIResponse(data) {
  // Process the data here...
  console.log('Processing API response:', data);
}

// Call the function to fetch data from the API
fetchDataFromAPI();
