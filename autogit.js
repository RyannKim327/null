async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const url = 'https://api.example.com/data';
fetchData(url)
    .then(data => {
        console.log('Fetched data:', data);
    });
