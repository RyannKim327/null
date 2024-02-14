const connectAsyncTask = async () => {
  // Perform the async task to connect in the background
  return new Promise((resolve, reject) => {
    // Simulating a long-running task with setTimeout
    setTimeout(() => {
      // Assuming the connection is successful
      const isConnected = true;
      
      if (isConnected) {
        resolve('Connection successful');
      } else {
        reject('Connection failed');
      }
    }, 2000); // Simulating a 2-second connection attempt
  });
};

// Call the async task
connectAsyncTask()
  .then((message) => {
    console.log(message); // Connection successful
    // Perform any additional actions after connection
  })
  .catch((error) => {
    console.log(error); // Connection failed
    // Handle the error or retry the connection
  });
