fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    console.log(data.content);
  })
  .catch(error => {
    console.error('An error occurred', error);
  });
