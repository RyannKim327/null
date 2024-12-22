import android.os.AsyncTask;

public class MyAsyncTask extends AsyncTask<Void, Void, String> {

    @Override
    protected String doInBackground(Void... voids) {
        // Perform background task here
        return "Task completed!";
    }

    @Override
    protected void onPostExecute(String result) {
        // Update UI with the result
    }
}
MyAsyncTask myTask = new MyAsyncTask();
myTask.execute();
