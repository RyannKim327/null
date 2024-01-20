fetch('https://api.example.com/data') // replace with your API endpoint URL
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('Error:', error));
