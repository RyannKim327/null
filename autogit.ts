// Simulate an asynchronous connection function
function connectToServer(): Promise<string> {
  return new Promise((resolve, reject) => {
    console.log('Starting connection...');
    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% chance to succeed
      if (success) {
        resolve('Connection successful!');
      } else {
        reject('Connection failed.');
      }
    }, 3000); // simulate network delay
  });
}

// Async function to handle connection
async function connectAsync() {
  try {
    const message = await connectToServer();
    console.log(message);
    // handle success (e.g., update UI, proceed to next step)
  } catch (error) {
    console.error(error);
    // handle error (e.g., show retry option)
  }
}

// Call the async connection
connectAsync();
