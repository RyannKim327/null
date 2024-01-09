async function connectToApi() {
  try {
    const url = 'https://api.example.com/data'; // Replace with your API endpoint

    const response = await fetch(url);
    const data = await response.json();

    // Process the data received from the API
    console.log(data);

    // You can also update the UI with the received data
    updateUI(data);
  } catch (error) {
    // Handle any errors that occurred during the API request
    console.error('Error:', error);
  }
}

function updateUI(data) {
  // Update the user interface with the received data
  // Example: document.getElementById('data').textContent = data;
}

// Call the connectToApi() function to initiate the API request
connectToApi();
