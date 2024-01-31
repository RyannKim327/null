const axios = require('axios');

// Make a GET request
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log('GET Request - Response:', response.data);
  })
  .catch(error => {
    console.error('GET Request - Error:', error);
  });

// Make a POST request
const newPost = {
  title: 'New Post',
  body: 'This is the body of a new post',
  userId: 1
};

axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
  .then(response => {
    console.log('POST Request - Response:', response.data);
  })
  .catch(error => {
    console.error('POST Request - Error:', error);
  });
