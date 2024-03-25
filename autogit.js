// Define the URL of the server
const url = 'https://api.example.com/data';

// Define the function to connect to the server asynchronously
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Call the fetchData function to initiate the connection
fetchData();
