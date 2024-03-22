// Define the URL of the API endpoint
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Define the function to fetch data from the API asynchronously
async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      // You can process the received data here
    } else {
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    console.error(error);
  }
}

// Call the fetchData function
fetchData();
