async function connectToAsyncTask() {
  const url = 'https://example.com/your_async_task_endpoint';
  
  try {
    const response = await fetch(url);
    if (response.ok) {
      const result = await response.json();
      console.log(result); // Process the response data
    } else {
      throw new Error('Request failed with status: ' + response.status);
    }
  } catch (error) {
    console.error('Error connecting to AsyncTask:', error);
  }
}

connectToAsyncTask();
