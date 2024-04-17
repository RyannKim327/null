const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData()
  .then(data => {
    console.log('Received data:', data);
    // Do something with the data
  })
  .catch(error => console.error('Error processing data:', error));
