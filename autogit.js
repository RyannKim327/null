import android.os.AsyncTask
import java.io.BufferedInputStream
import java.io.BufferedReader
import java.io.InputStreamReader
import java.net.HttpURLConnection
import java.net.URL

class ConnectAsyncTask : AsyncTask<String, Void, String>() {

    override fun doInBackground(vararg urls: String): String {
        val url = URL(urls[0])
        val urlConnection = url.openConnection() as HttpURLConnection

        try {
            val inputStream = BufferedInputStream(urlConnection.inputStream)
            val bufferedReader = BufferedReader(InputStreamReader(inputStream))
            val response = StringBuilder()
            var line: String?

            while (bufferedReader.readLine().also { line = it } != null) {
                response.append(line)
            }

            return response.toString()
        } finally {
            urlConnection.disconnect()
        }
    }

    override fun onPostExecute(result: String) {
        // Handle the result here
        // This method runs on the UI thread
    }
}
