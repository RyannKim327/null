const axios = require('axios');

// Function to make a GET request to an API
async function getApiData(apiUrl) {
   try {
      // Make the GET request using Axios
      const response = await axios.get(apiUrl);

      // Extract the data from the response
      const data = response.data;

      // Process the data or perform any desired operations
      console.log(data);

   } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error:', error.message);
   }
}

// Call the function with the desired API URL
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
getApiData(apiUrl);
