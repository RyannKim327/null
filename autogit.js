const connectToAsyncTask = async () => {
  try {
    const response = await fetch('https://api.example.com/async-task');

    if (response.ok) {
      const result = await response.json();
      console.log(result);
    } else {
      console.error('Failed to connect to the async task.');
    }
  } catch (error) {
    console.error('An error occurred while connecting to the async task:', error);
  }
};

connectToAsyncTask();
