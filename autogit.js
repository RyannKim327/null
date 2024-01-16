function makeAsyncRequest(url) {
    return new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.onload = function() {
            if (request.status === 200) {
                resolve(request.responseText);
            } else {
                reject(Error(request.statusText));
            }
        };

        request.onerror = function() {
            reject(Error('Network Error'));
        };

        request.send();
    });
}

makeAsyncRequest('https://example.com')
    .then(function(responseText) {
        console.log('Response:', responseText);
        // Deal with the response here
    })
    .catch(function(error) {
        console.error('Error:', error);
        // Handle the error here
    });
