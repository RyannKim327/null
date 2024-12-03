import android.os.AsyncTask;
import android.widget.Toast;

public class MyAsyncTask extends AsyncTask<Void, Void, String> {

    @Override
    protected String doInBackground(Void... voids) {
        try {
            // Connect to a server or perform any background task here
            Thread.sleep(2000); // Simulating a task that takes 2 seconds
            return "Connected successfully";
        } catch (Exception e) {
            return "Failed to connect";
        }
    }

    @Override
    protected void onPostExecute(String result) {
        super.onPostExecute(result);
        Toast.makeText(getApplicationContext(), result, Toast.LENGTH_SHORT).show();
    }
}
