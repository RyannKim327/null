const apiUrl = 'https://api.example.com/data'; // Replace this with the actual API url

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Display the API response data
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
