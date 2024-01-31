// Make a GET request to the Random User Generator API
fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    const user = data.results[0]; // Get the first user object

    // Extract the user data
    const firstName = user.name.first;
    const lastName = user.name.last;
    const gender = user.gender;
    const email = user.email;
    const city = user.location.city;
    const country = user.location.country;
    const picture = user.picture.large;

    // Display the user data in the browser
    const userInfoContainer = document.getElementById('user-info');

    userInfoContainer.innerHTML = `
      <img src="${picture}" alt="Profile Picture">
      <h2>${firstName} ${lastName}</h2>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Location:</strong> ${city}, ${country}</p>
    `;
  })
  .catch(error => {
    console.error('Error:', error);
  });
