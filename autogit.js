import android.os.AsyncTask
import java.io.BufferedReader
import java.io.InputStreamReader
import java.net.HttpURLConnection
import java.net.URL

class NetworkTask : AsyncTask<String, Void, String>() {

    override fun doInBackground(vararg params: String?): String {
        val urlString = params[0] ?: return "URL not provided"

        var result = ""
        var connection: HttpURLConnection? = null
        try {
            val url = URL(urlString)
            connection = url.openConnection() as HttpURLConnection
            connection.requestMethod = "GET"

            val reader = BufferedReader(InputStreamReader(connection.inputStream))
            var line: String?
            while (reader.readLine().also { line = it } != null) {
                result += line
            }
        } catch (e: Exception) {
            e.printStackTrace()
        } finally {
            connection?.disconnect()
        }

        return result
    }

    override fun onPostExecute(result: String?) {
        // Handle the result here
    }
}
