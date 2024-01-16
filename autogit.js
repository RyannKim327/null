// AsyncTask class
class ConnectTask extends AsyncTask<String, Void, String> {

  // Pre-execute tasks
  protected void onPreExecute() {
    // Display a progress dialog or perform setup tasks
  }

  // Background task
  protected String doInBackground(String... params) {
    try {
      // Connect to the server
      URL url = new URL(params[0]);
      HttpURLConnection connection = (HttpURLConnection) url.openConnection();
      connection.setRequestMethod("GET");

      // Read the response
      BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
      StringBuilder response = new StringBuilder();
      String line;
      while ((line = reader.readLine()) != null) {
        response.append(line);
      }
      reader.close();

      // Return the response
      return response.toString();
    } catch (Exception e) {
      e.printStackTrace();
      return null;
    }
  }

  // Post-execute tasks
  protected void onPostExecute(String result) {
    // Process the response data
    if (result != null) {
      // Display the result or perform further actions
    } else {
      // Show an error message or handle the failure
    }
  }
}

// Usage
String serverUrl = "https://myserver.com/api/data";
ConnectTask connectTask = new ConnectTask();
connectTask.execute(serverUrl);
