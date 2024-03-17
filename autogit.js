// Making an asynchronous HTTP request in JavaScript (assuming running inside an Android WebView)

// Define the URL to connect to
const url = 'https://jsonplaceholder.typicode.com/posts';

// Making an asynchronous request using Fetch API
fetch(url)
    .then(response => response.json())
    .then(data => {
        // Handle the data received from the server
        console.log(data);
    })
    .catch(error => {
        // Handle any errors that occur during the fetch operation
        console.error('Error:', error);
    });
