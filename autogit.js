// Make a GET request to an API endpoint
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Process the retrieved data
    console.log(data);
    // Do something with the data, such as displaying it on the webpage
    document.getElementById('dataContainer').innerText = JSON.stringify(data);
  })
  .catch(error => {
    console.log('Error:', error);
  });
