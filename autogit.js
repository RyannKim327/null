function fetchDataFromServer(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        
        xhr.open('GET', url, true);
        
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        };
        
        xhr.onerror = function() {
            reject(xhr.statusText);
        };
        
        xhr.send();
    });
}

async function connectAsyncTask() {
    try {
        const data = await fetchDataFromServer('https://api.example.com/data');
        console.log('Data received:', data);
        // Process the data further
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

connectAsyncTask();
