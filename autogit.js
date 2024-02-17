const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://api.example.com/data');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

fetchData();
