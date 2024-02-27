const asyncTask = async () => {
  return new Promise((resolve, reject) => {
    // Simulating an async task that connects to an Android backend
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("Connection successful!"); // Resolve the promise if successful
      } else {
        reject(new Error("Connection failed")); // Reject the promise if failed
      }
    }, 2000); // Simulating a 2-second delay
  });
};

asyncTask()
  .then((result) => {
    console.log(result); // Log the successful connection message
  })
  .catch((error) => {
    console.error(error.message); // Log the error message if connection fails
});
