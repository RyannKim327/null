const fetchAsyncData = async () => {
  try {
    const response = await fetch('https://api.example.com/android-data');
    const data = await response.json();
    console.log('Received data from Android device:', data);
    // Further processing of data received from Android device
  } catch (error) {
    console.error('Error fetching data from Android device:', error);
  }
}

fetchAsyncData();
