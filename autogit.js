async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();

    // Work with the received data
    console.log(data);
  } catch (error) {
    console.log('Error:', error);
  }
}

fetchData();
