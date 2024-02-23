async function connectToAndroidApp() {
  const response = await fetch('http://your-android-app-url/api/data', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // Add any necessary headers here
    }
  });

  if (!response.ok) {
    throw new Error('Unable to connect to Android app');
  }

  const data = await response.json();
  console.log(data);
}

connectToAndroidApp();
