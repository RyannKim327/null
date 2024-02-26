const url = 'http://example.com/api/data';

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Perform additional operations with the fetched data
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
