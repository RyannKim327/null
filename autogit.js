async function connectToDevice() {
  try {
    // Perform the connection logic here
    await connectAsync(); // Assuming connectAsync is an asynchronous function

    // If connection is successful, do something
    console.log('Connected to Android device');

    // ...

  } catch (error) {
    console.error('Error connecting to Android device:', error);
  }
}

// Call the function to initiate the connection
connectToDevice();
