const axios = require('axios');

// Make a GET request
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

// Make a POST request
const requestBody = {
  username: 'exampleUser',
  password: 'examplePassword'
};

axios.post('https://api.example.com/login', requestBody)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
