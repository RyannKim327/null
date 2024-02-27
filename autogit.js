// Create a function to perform a network request asynchronously
function connectToAsyncTask() {
    return new Promise((resolve, reject) => {
        // Create a new XMLHTTPRequest object
        const xhr = new XMLHttpRequest();

        // Configure the request
        xhr.open('GET', 'https://api.example.com/data', true);

        // Set up a callback function to handle the response
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                // Resolve the promise with the response data
                resolve(xhr.responseText);
            } else {
                // Reject the promise with an error message
                reject(xhr.statusText);
            }
        };

        // Handle network errors
        xhr.onerror = function () {
            reject(xhr.statusText);
        };

        // Send the request
        xhr.send();
    });
}

// Call the async function and handle the promise
connectToAsyncTask()
    .then((response) => {
        console.log('Async task succeeded:', response);
    })
    .catch((error) => {
        console.error('Async task failed:', error);
    });
