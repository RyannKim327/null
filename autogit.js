const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log('Response received:');
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error occurred:');
    console.log(error);
  });
