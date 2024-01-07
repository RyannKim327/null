function connectAsyncTask() {
  const url = 'http://your-android-device-ip:port'; // Replace with your Android device IP address and port
  
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    };

    xhr.onerror = function () {
      reject(xhr.statusText);
    };

    xhr.send();
  });
}

// Example usage of the connectAsyncTask function
connectAsyncTask()
  .then(response => {
    console.log('Connection successful:', response);
    // Do something with the response from the Android device
  })
  .catch(error => {
    console.error('Connection failed:', error);
    // Handle the error if the connection fails
  });
