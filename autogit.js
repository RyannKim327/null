const axios = require('axios');

// Make a GET request to retrieve data from an API
axios.get('https://api.example.com/data')
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Make a POST request to send data to an API
const data = {
  name: 'John Doe',
  age: 25,
  email: 'johndoe@example.com'
};

axios.post('https://api.example.com/post-data', data)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
