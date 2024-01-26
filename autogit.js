const axios = require('axios');

// Make a GET request to an API endpoint
axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
  // Handle success
  console.log('Response data:', response.data);
}).catch(error => {
  // Handle error
  console.error('Error:', error.message);
});

// Make a POST request to an API endpoint
const data = {
  title: 'foo',
  body: 'bar',
  userId: 1,
};

axios.post('https://jsonplaceholder.typicode.com/posts', data).then(response => {
  // Handle success
  console.log('Created new post:', response.data);
}).catch(error => {
  // Handle error
  console.error('Error:', error.message);
});
