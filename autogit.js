// Async function to fetch data from a remote server in Android
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// Function to initiate the async task in Android
function startAsyncTask() {
  fetchData()
    .then((data) => {
      // Handle the data received from the server
      console.log('Data received:', data);

      // Add your Android-specific code here to process the data
    })
    .catch((error) => {
      console.error('Error in async task:', error);
    });
}

// Call the startAsyncTask function when the page loads or some event occurs
startAsyncTask();
