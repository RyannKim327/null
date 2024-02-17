const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log('Response data:', response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
