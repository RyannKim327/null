// Define a function to make an asynchronous request
function makeAsyncRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Request completed successfully
      callback(xhr.responseText);
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      // Request failed
      callback(null, "Request failed");
    }
  };
  
  xhr.send();
}

// Example usage
var requestUrl = "https://api.example.com/data";
makeAsyncRequest(requestUrl, function(response, error) {
  if (response) {
    // Handle the received response
    console.log("Response:", response);
    
    // Parse the response JSON if required
    var data = JSON.parse(response);
    console.log("Parsed Data:", data);
    
    // Perform any operations on the data here
    
  } else {
    // Handle the error
    console.error("Error:", error);
  }
});
