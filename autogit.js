async function connectAsyncTask() {
  try {
    const response = await fetch('http://example.com/api/data'); // Replace with your API endpoint
    const data = await response.json();
    console.log(data); // Do something with the received data
  } catch (error) {
    console.error(error);
  }
}

connectAsyncTask();
