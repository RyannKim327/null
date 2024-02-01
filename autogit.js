// Creating a function to connect to the server asynchronously
async function connectToServer(url, params) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Error connecting to the server');
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}

// Example usage
const serverUrl = 'https://your-server-url.com';
const requestData = {
  param1: 'value1',
  param2: 'value2'
};

connectToServer(serverUrl, requestData)
  .then((response) => {
    console.log('Server response:', response);
    // Further processing of the response
  })
  .catch((error) => {
    console.error('Error connecting to the server:', error);
  });
