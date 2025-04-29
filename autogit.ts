// Simulated async connection task
async function connectToDevice(deviceId: string): Promise<string> {
  console.log(`Attempting to connect to device ${deviceId}...`);

  return new Promise((resolve, reject) => {
    // Simulate connection delay
    setTimeout(() => {
      // Simulating a success or failure randomly
      const success = Math.random() > 0.3;

      if (success) {
        resolve(`Connected to device ${deviceId}`);
      } else {
        reject(new Error(`Failed to connect to device ${deviceId}`));
      }
    }, 2000);
  });
}

// Usage example
async function runConnection() {
  try {
    const result = await connectToDevice("android-device-123");
    console.log(result);
  } catch (error: any) {
    console.error(error.message);
  }
}

runConnection();
