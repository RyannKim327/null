fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Process the retrieved data
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
