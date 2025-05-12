// Simulated async connection task
async function connectToAndroidService(): Promise<string> {
  console.log('Starting connection to Android service...');
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.3; // 70% chance to connect
      
      if (success) {
        resolve('Connected to Android service successfully!');
      } else {
        reject(new Error('Failed to connect to Android service.'));
      }
    }, 2000); // simulate async 2-second task
  });
}

// Usage example
async function runConnection() {
  try {
    const result = await connectToAndroidService();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

runConnection();
