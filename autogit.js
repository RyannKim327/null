// Define the async task
function AsyncTask() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous task
    setTimeout(() => {
      // Resolve the task after 2 seconds
      resolve('Async task completed!');
    }, 2000);
  });
}

// Function that connects to the async task
function connectAsyncTask() {
  AsyncTask()
    .then((result) => {
      console.log(result); // Output the result when task is completed
    })
    .catch((error) => {
      console.error(error); // Output any error that occurred during the task
    });
}

// Call the function to connect to the async task
connectAsyncTask();
