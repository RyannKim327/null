fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log('An error occurred:', error);
  });
