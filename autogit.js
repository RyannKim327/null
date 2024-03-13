const apiUrl = 'https://jsonplaceholder.typicode.com/users';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const firstUser = data[0];
    console.log('First user:', firstUser);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
