// Import required Java classes
var URL = Java.type("java.net.URL");
var HttpURLConnection = Java.type("java.net.HttpURLConnection");
var BufferedReader = Java.type("java.io.BufferedReader");
var InputStreamReader = Java.type("java.io.InputStreamReader");

// Define AsyncTask class
var ConnectTask = Java.extend(Java.type("android.os.AsyncTask"), {
  doInBackground: function() {
    var result = "";

    try {
      var url = new URL("http://www.example.com"); // replace with your server URL
      var connection = url.openConnection();
      connection.setRequestMethod("GET");

      var inputStream = connection.getInputStream();
      var reader = new BufferedReader(new InputStreamReader(inputStream));

      var line = "";
      while ((line = reader.readLine()) != null) {
        result += line;
      }

      reader.close();
      inputStream.close();
      connection.disconnect();
    } catch (e) {
      console.error("Error occurred: " + e);
    }

    return result;
  },

  onPostExecute: function(result) {
    console.log("Response from server: " + result);
    // Execute further actions on the UI thread with the received result
  }
});

// Create instance of ConnectTask and execute it
var connectTask = new ConnectTask();
connectTask.execute();
