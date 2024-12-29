import android.os.AsyncTask
import java.net.HttpURLConnection
import java.net.URL

class ConnectAsyncTask : AsyncTask<String, Void, String>() {

    override fun doInBackground(vararg params: String): String {
        val urlString = params[0]
        val url = URL(urlString)
        val urlConnection = url.openConnection() as HttpURLConnection

        try {
            val inputStream = urlConnection.inputStream
            val response = inputStream.bufferedReader().use { it.readText() }
            return response
        } finally {
            urlConnection.disconnect()
        }
    }

    override fun onPostExecute(result: String) {
        // Handle the result here
    }
}
