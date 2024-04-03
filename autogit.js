async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Replace 'https://api.example.com/data' with the actual API endpoint
const apiUrl = 'https://api.example.com/data';
fetchData(apiUrl)
  .then(data => {
    console.log('Received data:', data);
    // Use the data as needed
  });
