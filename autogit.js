async function connectToAndroidBackend() {
  try {
    const response = await fetch('https://your-android-backend-url.com/api/data', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
      // Add any required request parameters here
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Received data from Android backend:', data);
      // Do something with the received data
    } else {
      throw new Error('Failed to connect to the Android backend');
    }
  } catch (error) {
    console.error('Error connecting to the Android backend:', error);
    // Handle the error appropriately
  }
}

// Call the connectToAndroidBackend function to initiate the connection
connectToAndroidBackend();
