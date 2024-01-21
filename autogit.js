const axios = require('axios');

// Function to make an HTTP GET request using Axios
const makeGetRequest = async () => {
  try {
    const response = await axios.get('https://api.example.com/users');
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

// Function to make an HTTP POST request using Axios
const makePostRequest = async (data) => {
  try {
    const response = await axios.post('https://api.example.com/users', data);
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

// Call the functions
makeGetRequest();
makePostRequest({ name: 'John Doe', email: 'johndoe@example.com' });
