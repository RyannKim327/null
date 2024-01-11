// Import required libraries
const fetch = require('node-fetch');

// Async function to make the API call
async function connectToAndroidDevice(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // Process the response data here
  } catch (error) {
    console.error('An error occurred while connecting to the Android device:', error);
  }
}

// Define the URL of the Android device
const androidDeviceUrl = 'https://your-android-device-url.com/api';

// Call the async function
connectToAndroidDevice(androidDeviceUrl);
