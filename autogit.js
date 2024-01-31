// Define the AsyncTask to handle the network request
class ConnectAsyncTask extends AsyncTask<String, Void, String> {

  @Override
  protected String doInBackground(String... params) {
    try {
      String urlString = params[0]; // URL of the server
      URL url = new URL(urlString);
      
      // Open a connection to the server
      HttpURLConnection connection = (HttpURLConnection) url.openConnection();
      connection.setRequestMethod("GET"); // Use GET method
      connection.setConnectTimeout(5000); // Set connection timeout
      connection.setReadTimeout(5000); // Set read timeout
      
      // Get the response from the server
      int responseCode = connection.getResponseCode();
      if (responseCode == HttpURLConnection.HTTP_OK) {
        // Successful request
        InputStream inputStream = connection.getInputStream();
        
        // Read the response from the server
        BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
        StringBuilder response = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
          response.append(line);
        }
        
        // Close the connections
        reader.close();
        inputStream.close();
        connection.disconnect();
        
        return response.toString();
      } else {
        // Unsuccessful request
        return "Error: " + responseCode;
      }
    } catch (Exception e) {
      e.printStackTrace();
      return "Error: " + e.getMessage();
    }
  }

  @Override
  protected void onPostExecute(String result) {
    // Handle the result here
    if (result.startsWith("Error")) {
      // Error occurred
      Log.e("ConnectAsyncTask", result);
    } else {
      // Success
      Log.d("ConnectAsyncTask", result);
    }
  }
}

// Usage
String serverUrl = "http://example.com/api"; // Replace with your server URL
ConnectAsyncTask connectTask = new ConnectAsyncTask();
connectTask.execute(serverUrl);
