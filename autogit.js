// Function to make a GET request using Fetch
function fetchData(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log("Success:", data);
    })
    .catch(error => {
      console.log("Error:", error);
    });
}

// Example usage
const apiUrl = 'https://api.example.com/data';
fetchData(apiUrl);
