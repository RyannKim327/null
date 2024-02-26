function fetchDataFromAndroid() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous call to Android
    setTimeout(() => {
      // Here you can perform the actual connection to Android using fetch or any other method
      const response = {
        data: 'Hello from Android!'
      };
      resolve(response);
    }, 2000); // Simulating a 2-second delay
  });
}

async function connectToAndroid() {
  try {
    const response = await fetchDataFromAndroid();
    console.log('Data received from Android:', response.data);
  } catch (error) {
    console.error('Error connecting to Android:', error);
  }
}

connectToAndroid();
