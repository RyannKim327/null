const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => {
    console.log('Title:', response.data.title);
    console.log('Body:', response.data.body);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
