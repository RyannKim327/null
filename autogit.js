const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
npm install axios
yarn add axios
