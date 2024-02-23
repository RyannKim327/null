// Create a function to make an HTTP request
function makeHttpRequest() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const url = 'https://api.example.com/data';
    
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(new Error('Request failed'));
        }
      }
    };

    xhr.open('GET', url, true);
    xhr.send();
  });
}

// Call the function using an async task
async function connectToServer() {
  try {
    const response = await makeHttpRequest();
    console.log('Response from server:', response);
  } catch (error) {
    console.error('Error connecting to server:', error);
  }
}

// Call the async function to connect to the server
connectToServer();
