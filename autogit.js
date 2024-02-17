// Function to make an HTTP request
function makeRequest(method, url, data) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        
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
        
        xhr.send(JSON.stringify(data));
    });
}

// Usage example
async function fetchData() {
    try {
        const response = await makeRequest('GET', 'https://api.example.com/data', {});
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

// Call the fetchData function
fetchData();
