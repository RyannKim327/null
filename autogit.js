import android.os.AsyncTask;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class MyAsyncTask extends AsyncTask<String, Void, String> {

    @Override
    protected String doInBackground(String... params) {
        StringBuilder result = new StringBuilder();
        
        try {
            URL url = new URL(params[0]);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");

            InputStream inputStream = conn.getInputStream();
            BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
            String line;

            while ((line = reader.readLine()) != null) {
                result.append(line);
            }

            reader.close();
            inputStream.close();
            conn.disconnect();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return result.toString();
    }

    @Override
    protected void onPostExecute(String result) {
        // Handle the result here, such as updating UI with the response data
    }
}
