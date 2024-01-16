function makeRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 400) {
      callback(null, xhr.responseText);
    } else {
      callback(new Error('Request failed with status ' + xhr.status));
    }
  };

  xhr.onerror = function() {
    callback(new Error('Request failed'));
  };

  xhr.send();
}

// Example usage
makeRequest('http://example.com/api/data', function(error, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(response);
    // Do something with the response
  }
});
