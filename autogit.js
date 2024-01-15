// Function to fetch data from an API
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error fetching data:', error);
  }
}

// Call the fetchData function
fetchData();
