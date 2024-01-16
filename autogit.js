// Function to make GET request using fetch
function getData(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

// Example usage
const apiUrl = 'https://api.example.com/data';
getData(apiUrl);
