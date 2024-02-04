function connectToServer(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject(Error(xhr.statusText));
      }
    };
    xhr.onerror = function() {
      reject(Error("Network Error"));
    };
    xhr.send();
  });
}

const serverUrl = 'https://api.example.com/data';
connectToServer(serverUrl)
  .then(response => {
    console.log('Response from server:', response);
    // Process the response data here
  })
  .catch(error => {
    console.error('Error connecting to server:', error);
  });
