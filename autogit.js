async function connectToAndroidApp() {
  try {
    const response = await fetch('http://your-android-app-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ key: 'value' }) // Replace with the data you want to send to the Android app
    });

    if (response.ok) {
      const responseData = await response.json();
      // Process the response from the Android app
      console.log(responseData);
    } else {
      console.error('Error connecting to Android app:', response.statusText);
    }
  } catch (error) {
    console.error('An error occurred while connecting to Android app:', error);
  }
}

connectToAndroidApp();
