// Define the URL of the server
const serverUrl = 'https://example.com/api';

// Define the data to send to the server
const requestData = {
  name: 'John Doe',
  age: 30,
};

// Define an async function to make the API call
async function connectToServerAsync() {
  try {
    const response = await fetch(serverUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error('Server returned an error');
    }

    const jsonResponse = await response.json();
    console.log(jsonResponse); // Process the server response data here

  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Call the async function
connectToServerAsync();
