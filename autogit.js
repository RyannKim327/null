import android.os.AsyncTask
import java.net.URL

class ConnectAsyncTask : AsyncTask<String, Void, String>() {

    override fun doInBackground(vararg urls: String): String {
        val url = URL(urls[0])
        val connection = url.openConnection() as HttpURLConnection
        return connection.inputStream.bufferedReader().use { it.readText() }
    }

    override fun onPostExecute(result: String) {
        // Process the result here
    }
}
