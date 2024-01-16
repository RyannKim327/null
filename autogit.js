const axios = require('axios');

async function getApiData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getApiData();
