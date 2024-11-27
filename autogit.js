import android.os.AsyncTask
import java.net.HttpURLConnection
import java.net.URL
import java.io.BufferedReader
import java.io.InputStreamReader


class MyAsyncTask : AsyncTask<String, Void, String>() {

    override fun doInBackground(vararg urls: String?): String {
        var response = ""
        for (url in urls) {
            response = makeHttpRequest(url!!)
        }
        return response
    }

    private fun makeHttpRequest(stringUrl: String): String {
        var result = ""
        val url = URL(stringUrl)
        val connection = url.openConnection() as HttpURLConnection
        try {
            val inputStream = connection.inputStream
            val reader = BufferedReader(InputStreamReader(inputStream))
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
        // Handle the HTTP response here
    }
}

// Usage
val asyncTask = MyAsyncTask()
asyncTask.execute("http://www.example.com")
