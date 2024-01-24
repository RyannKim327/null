// Function to fetch data from an API
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data'); // Replace with the desired API endpoint

    if (!response.ok) {
      throw new Error('Unable to fetch data');
    }

    const data = await response.json();
    console.log(data); // Do something with the fetched data
  } catch (error) {
    console.error(error);
  }
}

// Call the fetchData function
fetchData();
