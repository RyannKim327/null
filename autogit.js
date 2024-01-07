// Fetching random user data from an API
fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    // Extracting user information from the API response
    const user = data.results[0];
    const name = `${user.name.first} ${user.name.last}`;
    const email = user.email;
    const location = `${user.location.city}, ${user.location.country}`;
    
    // Logging the user information
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Location:', location);
  })
  .catch(error => {
    console.log('Error:', error);
  });
