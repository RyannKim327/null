// Function to fetch data from an API
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data'); // Replace with the desired API endpoint
    const data = await response.json();
    console.log(data); // Do something with the retrieved data
  } catch (error) {
    console.log('Error fetching data:', error);
  }
}

// Call the function to fetch data
fetchData();
