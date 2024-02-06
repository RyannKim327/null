const axios = require('axios');

// Make a GET request to an API endpoint
axios.get('https://api.example.com/data')
  .then(response => {
    // Handle successful response
    console.log(response.data);
  })
  .catch(error => {
    // Handle error
    console.log(error);
  });

// Make a POST request to an API endpoint with data
const postData = {
  name: 'John Doe',
  email: 'johndoe@example.com'
};

axios.post('https://api.example.com/user', postData)
  .then(response => {
    // Handle successful response
    console.log(response.data);
  })
  .catch(error => {
    // Handle error
    console.log(error);
  });
