async function connectToAPI() {
    return new Promise((resolve, reject) => {
        const url = 'https://api.example.com/data';
        
        // Perform API call
        fetch(url)
            .then(response => response.json())
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

async function fetchData() {
    try {
        const data = await connectToAPI();
        console.log('Data received:', data);
    } catch(error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
