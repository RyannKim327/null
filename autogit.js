async function fetchData() {
  const url = 'https://api.example.com/data';
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    console.log(data);
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
