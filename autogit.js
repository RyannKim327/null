function makeAsyncRequest(url, method, data) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function() {
            reject({
                status: xhr.status,
                statusText: xhr.statusText
            });
        };
        xhr.send(JSON.stringify(data));
    });
}

// Example usage
var apiUrl = 'https://api.example.com/data';
var requestData = {
    param1: 'value1',
    param2: 'value2'
};

makeAsyncRequest(apiUrl, 'POST', requestData)
    .then(function(response) {
        console.log('Request successful: ', response);
    })
    .catch(function(error) {
        console.error('Error occurred: ', error);
    });
