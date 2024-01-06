// Fetch data from an API using JavaScript

// Function to fetch data from API
async function fetchData() {
  const apiUrl = 'https://api.example.com/data'; // replace with your API endpoint

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.log('Error:', error);
  }
}

// Display the fetched data
async function displayData() {
  const data = await fetchData();
  
  // Example: Display each item's title property in the console
  data.forEach(item => {
    console.log(item.title);
  });
}

// Call the displayData function
displayData();
