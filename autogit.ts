// Example async function to connect to an Android backend API
async function fetchAndroidData(): Promise<any> {
  try {
    const response = await fetch('http://192.168.1.100:8080/api/data', {
      method: 'GET', // Or POST, PUT, etc.
      headers: {
        'Content-Type': 'application/json',
        // Add auth tokens or other headers if needed
      },
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    // Process data received from Android backend
    return data;
  } catch (error) {
    console.error('Failed to fetch data from Android device:', error);
    throw error;
  }
}

// Usage example inside an async React component or function
async function runAsyncTask() {
  try {
    const result = await fetchAndroidData();
    console.log('Received data:', result);
  } catch (e) {
    console.log('Error during async connection:', e);
  }
}

// Run the example task
runAsyncTask();
