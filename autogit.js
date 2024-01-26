// Create an AsyncTask class to handle the network operation
class ConnectAsyncTask extends AsyncTask {
    private String url;

    public ConnectAsyncTask(String url) {
        this.url = url;
    }

    protected String doInBackground(Void... params) {
        try {
            // Establish a connection to the server
            URL url = new URL(this.url);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            
            // Set the request method to GET (or POST, if needed)
            connection.setRequestMethod("GET");
            
            // Get the response from the server
            int responseCode = connection.getResponseCode();
            if (responseCode == HttpURLConnection.HTTP_OK) {
                BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                StringBuilder response = new StringBuilder();
                String line;

                while ((line = in.readLine()) != null) {
                    response.append(line);
                }
                in.close();

                return response.toString();
            } else {
                return "Error response: " + responseCode;
            }
        } catch (Exception e) {
            return "Exception: " + e.getMessage();
        }
    }

    protected void onPostExecute(String result) {
        // Perform any post-execution tasks with the result
        // For example, update UI elements with the received data
        textView.setText(result);
    }
}

// Usage:
String serverUrl = "http://example.com/api"; // Replace with your server URL
new ConnectAsyncTask(serverUrl).execute();
