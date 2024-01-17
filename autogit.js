const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log('Error:', error);
  });
