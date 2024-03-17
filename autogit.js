async function connectToDevice() {
  try {
    const response = await fetch('http://yourandroiddeviceip:port/connect');
    const data = await response.json();
    
    console.log('Connected to Android device:', data);
    
    // Continue with more operations here...
  } catch (error) {
    console.error('Error connecting to Android device:', error);
  }
}

connectToDevice();
