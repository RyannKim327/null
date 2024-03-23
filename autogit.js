// Replace 'API_URL' with the actual API URL you want to fetch data from
const apiUrl = 'API_URL';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Do something with the data received from the API
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });
