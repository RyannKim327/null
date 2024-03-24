async function connectToDevice() {
  try {
    const response = await fetch('http://your-android-device-ip:port/connect', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ key: 'value' })
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error connecting to Android device:', error);
  }
}

connectToDevice();
