// Define an async function to connect to the Android async task
async function connectToAsyncTask() {
  try {
    const asyncTask = window.AndroidAsyncTask; // Reference to the Android async task

    // Call the async task function
    const result = await asyncTask.connect();

    // Handle the result
    console.log('Connected to async task:', result);

    // Other code to execute after connecting...
  } catch (error) {
    console.error('Error connecting to async task:', error);
  }
}

// Call the connectToAsyncTask() function when the page has finished loading
window.addEventListener('load', connectToAsyncTask);
