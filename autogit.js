import android.os.AsyncTask
import java.io.BufferedReader
import java.io.InputStreamReader
import java.net.HttpURLConnection
import java.net.URL

class AsyncHttpRequest : AsyncTask<String, Void, String>() {
    override fun doInBackground(vararg urls: String): String {
        val urlString = urls[0]
        var result = ""
        
        val url = URL(urlString)
        val connection = url.openConnection() as HttpURLConnection
        
        try {
            val reader = BufferedReader(InputStreamReader(connection.inputStream))
            var line: String?
            while (reader.readLine().also { line = it } != null) {
                result += line
            }
        } finally {
            connection.disconnect()
        }
        
        return result
    }

    override fun onPostExecute(result: String?) {
        // Handle the result here
    }
}

// To use the async task:
val url = "https://example.com/api"
val asyncRequest = AsyncHttpRequest()
asyncRequest.execute(url)
