// API endpoint URL
const apiUrl = 'https://randomuser.me/api/';

// Make a fetch request to the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const user = data.results[0];
    
    // Display the user data
    console.log('Name: ' + user.name.first + ' ' + user.name.last);
    console.log('Email: ' + user.email);
    console.log('Location: ' + user.location.city + ', ' + user.location.country);
  })
  .catch(error => {
    console.error('Error fetching data: ', error);
  });
