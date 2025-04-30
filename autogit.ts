// Simulate an asynchronous task, like connecting to a device or server
async function connectAsync(): Promise<string> {
  return new Promise((resolve, reject) => {
    // Simulate delay for async connection
    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% chance of success
      if (success) {
        resolve("Connection established successfully!");
      } else {
        reject(new Error("Failed to establish connection."));
      }
    }, 2000); // 2 seconds delay
  });
}

// Usage example
async function runConnection() {
  try {
    const message = await connectAsync();
    console.log(message);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

runConnection();
