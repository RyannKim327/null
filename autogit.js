// Create an XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Define the endpoint URL
var url = 'https://api.example.com/data';

// Open a request connection
xhr.open('GET', url, true);

// Set headers if required
// xhr.setRequestHeader('Content-Type', 'application/json');

// Define the success callback function
xhr.onload = function() {
  if (xhr.status === 200) {
    var response = JSON.parse(xhr.responseText);
    console.log(response);
    // Do something with the API response data
  }
};

// Define the error callback function
xhr.onerror = function() {
  console.log('Error occurred while making the request.');
};

// Send the request
xhr.send();
