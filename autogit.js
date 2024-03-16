const axios = require('axios');

axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'foo',
  body: 'bar',
  userId: 1
})
.then(response => {
  console.log('Post created:', response.data);
})
.catch(error =>{
  console.error('Error creating post:', error);
});
