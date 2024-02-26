// Define the async task function
async function fetchData(url) {
  try {
    // Use fetch to make a network request
    const response = await fetch(url);
    
    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Request failed');
    }
    
    // Parse the response as JSON
    const data = await response.json();
    
    // Return the data
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// Call the async task function with a sample URL
const url = 'https://api.example.com/data';
fetchData(url)
  .then(data => {
    // Process the data here
    console.log('Data received:', data);
  });
