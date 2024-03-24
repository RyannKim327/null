// Define the URL to connect to
const url = 'https://jsonplaceholder.typicode.com/posts/1';

// Define asynchronous task function
async function connectAsyncTask() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('Response:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the asynchronous task function
connectAsyncTask();
