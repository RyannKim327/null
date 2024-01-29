async function connectToAndroidAsyncTask() {
  try {
    const response = await fetch('https://your-android-async-task-endpoint');

    if (!response.ok) {
      throw new Error('Failed to connect to the Android async task');
    }

    const data = await response.json();
    console.log('Received data from Android async task:', data);
  } catch (error) {
    console.error('An error occurred while connecting to the Android async task:', error);
  }
}

connectToAndroidAsyncTask();
