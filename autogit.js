const apiUrl = 'https://api.example.com'; // Replace with your API URL

async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    // Manipulate and display the data
    console.log(data);
  } catch (error) {
    console.log('Error:', error);
  }
}

fetchData();
