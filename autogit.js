// Fetching data from an API using JavaScript

async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data'); // Replace with your API endpoint
    const data = await response.json();
    
    // Process the fetched data
    displayData(data);
  } catch (error) {
    console.log('Error:', error);
  }
}

function displayData(data) {
  // Display the fetched data on the web page
  const container = document.getElementById('data-container'); // Replace with the ID of the container element
  container.innerHTML = ''; // Clear previous data
  
  data.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item.name; // Assuming the API returns an array of objects with 'name' property
    container.appendChild(listItem);
  });
}

// Call the function to fetch and display data
fetchData();
