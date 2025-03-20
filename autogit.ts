async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

const apiUrl = 'https://api.example.com/data';
fetchData(apiUrl)
  .then((data) => {
    if (data) {
      console.log('Data fetched successfully:', data);
    } else {
      console.log('Failed to fetch data.');
    }
  });
