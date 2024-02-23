fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    data.forEach(user => {
      console.log(user.name);
    })
  })
  .catch(error => {
    console.log('Error fetching data: ', error);
  });
