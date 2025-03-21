async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  
  console.log(data);
}

fetchData();
