function fetchData() {
  fetch('https://api.example.com/data')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      // Do something with the fetched data
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

fetchData();
