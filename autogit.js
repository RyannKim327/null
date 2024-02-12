// AsyncHttpRequest.js

// Import necessary classes
var AsyncTask = Java.use('android.os.AsyncTask');
var HttpURLConnection = Java.use('java.net.HttpURLConnection');
var URL = Java.use('java.net.URL');

// Define the async task
var HttpRequestTask = AsyncTask.$new();

// Override doInBackground method
HttpRequestTask.doInBackground.implementation = function(urls) {
    try {
        var url = URL.$new(urls[0]);
        var connection = url.openConnection();
        connection.setRequestMethod('GET');
        connection.setConnectTimeout(5000);
        connection.connect();

        var responseCode = connection.getResponseCode();
        var responseMessage = connection.getResponseMessage();

        console.log('Response code: ' + responseCode);
        console.log('Response message: ' + responseMessage);

        // Read the response
        var inputStream = connection.getInputStream();
        var bufferedReader = Java.use('java.io.BufferedReader').$new(Java.use('java.io.InputStreamReader').$new(inputStream));
        var inputLine;
        var response = '';

        while ((inputLine = bufferedReader.readLine()) !== null) {
            response += inputLine;
        }

        bufferedReader.close();

        console.log('Response body: ' + response);

    } catch (e) {
        console.log('Error: ' + e);
    }

    return null;
};

// Execute the async task
HttpRequestTask.execute(['http://example.com']);
