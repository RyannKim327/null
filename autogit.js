const axios = require('axios');

// Make a GET request
axios.get('https://api.example.com/data')
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Make a POST request
const data = {
  name: 'John Doe',
  email: 'john.doe@example.com'
};

axios.post('https://api.example.com/users', data)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
