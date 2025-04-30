// TypeScript async function to simulate an asynchronous task
async function fetchDataAsync(): Promise<string> {
  return new Promise((resolve, reject) => {
    // Simulate network or async operation delay (e.g., 2 seconds)
    setTimeout(() => {
      // Simulate success response
      resolve("Data received from async task");
      
      // Uncomment to simulate failure
      // reject(new Error("Failed to fetch data"));
    }, 2000);
  });
}

// Example usage with async/await in an Android context (React Native or NativeScript)
async function runAsyncTask() {
  try {
    console.log("Starting async task...");
    const result = await fetchDataAsync();
    console.log("Async task completed successfully:", result);
  } catch (error) {
    console.error("Async task failed:", error);
  }
}

// Invoke the function (e.g., from a button press or component lifecycle)
runAsyncTask();
