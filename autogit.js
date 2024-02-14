const fetchUserData = async () => {
  try {
    const response = await fetch('http://example.com/api/user');
    const userData = await response.json();
    // Process the user data received from the API

    // Example: Log the user data
    console.log(userData);

    // Return the processed user data for further use
    return userData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

// Example usage of the async function
fetchUserData()
  .then((userData) => {
    // Use the user data retrieved from the API
    // Here you can perform further actions with the data
    console.log('User data:', userData);
  })
  .catch((error) => {
    // Handle any errors that occurred during the API call
    console.error('Error:', error);
  });
