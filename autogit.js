// Create a function to connect asynchronously
async function connectAsync() {
  try {
    // Perform the connection logic
    const result = await performConnectionLogic();
    console.log(result); // Output the result
  } catch (error) {
    console.log("Error:", error);
  }
}

// Create a Promise to mimic the connection logic
function performConnectionLogic() {
  return new Promise((resolve, reject) => {
    // Simulate connection delay with setTimeout
    setTimeout(() => {
      const isConnected = Math.random() >= 0.5; // Simulate successful connection

      if (isConnected) {
        resolve("Connected successfully!");
      } else {
        reject("Failed to connect.");
      }
    }, 2000); // Simulate a 2-second delay
  });
}

// Call the connectAsync function to initiate the connection
connectAsync();
