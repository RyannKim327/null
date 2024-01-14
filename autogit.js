const axios = require('axios');

// Make a GET request
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    console.log('GET Response:', response.data);
  })
  .catch((error) => {
    console.error('GET Error:', error);
  });

// Make a POST request
const postData = {
  title: 'foo',
  body: 'bar',
  userId: 1
};

axios.post('https://jsonplaceholder.typicode.com/posts', postData)
  .then((response) => {
    console.log('POST Response:', response.data);
  })
  .catch((error) => {
    console.error('POST Error:', error);
  });
