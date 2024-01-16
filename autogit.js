function connectToServer() {
    return new Promise((resolve, reject) => {
        // Create a new XMLHttpRequest object
        const xhr = new XMLHttpRequest();

        // Define the request URL and method
        const url = 'http://example.com/api';
        const method = 'GET';

        // Configure the request
        xhr.open(method, url, true);

        // Set the callback for when the request is complete
        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(new Error(`Request failed with status ${xhr.status}`));
            }
        };

        // Set the callback for network errors
        xhr.onerror = function () {
            reject(new Error('Network error'));
        };

        // Send the request
        xhr.send();
    });
}

// Usage example
connectToServer()
    .then(response => {
        console.log('Response:', response);
        // Do something with the response
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle the error
    });
