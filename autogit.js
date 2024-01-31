async function connectToDevice() {
  try {
    // Create a new WebSocket object and connect to the Android device
    const websocket = new WebSocket('wss://android-device-url');

    // Wait for the WebSocket to open
    await new Promise((resolve, reject) => {
      websocket.onopen = resolve;
      websocket.onerror = reject;
    });

    // WebSocket is open, send a message to the Android device
    websocket.send('Hello Android!');

    // Wait for a response from the Android device
    const response = await new Promise((resolve, reject) => {
      websocket.onmessage = (event) => resolve(event.data);
      websocket.onerror = reject;
    });

    // Received response from Android device
    console.log('Response from Android:', response);

    // Close the WebSocket connection
    websocket.close();
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the connectToDevice() function
connectToDevice();
