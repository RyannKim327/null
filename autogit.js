const fetchData = async () => {
  try {
    const response = await fetch('https://example.com/data');
    const data = await response.json();
    console.log(data);
    // You can perform any other operations with the data here
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};

fetchData();
