import android.os.AsyncTask
import java.io.BufferedReader
import java.io.InputStreamReader
import java.net.HttpURLConnection
import java.net.URL

class NetworkTask : AsyncTask<String, Void, String>() {

    override fun doInBackground(vararg params: String?): String {
        val urlString = params[0]
        val url = URL(urlString)
        val connection = url.openConnection() as HttpURLConnection

        try {
            val inputStream = connection.inputStream
            val bufferedReader = BufferedReader(InputStreamReader(inputStream))
            val stringBuilder = StringBuilder()
            var line: String?

            while (bufferedReader.readLine().also { line = it } != null) {
                stringBuilder.append(line)
            }

            return stringBuilder.toString()
        } catch (e: Exception) {
            e.printStackTrace()
            return "Error: ${e.message}"
        } finally {
            connection.disconnect()
        }
    }

    override fun onPostExecute(result: String?) {
        // Handle the result here
    }
}

// To execute the async task
val url = "https://api.example.com/data"
val task = NetworkTask()
task.execute(url)
