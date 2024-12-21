import android.os.AsyncTask
import java.net.HttpURLConnection
import java.net.URL

class MyAsyncTask : AsyncTask<String, Void, String>() {

    override fun doInBackground(vararg params: String): String {
        var result = ""
        try {
            val url = URL(params[0])
            val urlConnection = url.openConnection() as HttpURLConnection
            try {
                val inputStream = urlConnection.inputStream.bufferedReader()
                result = inputStream.use { it.readText() }
            } finally {
                urlConnection.disconnect()
            }
        } catch (e: Exception) {
            e.printStackTrace()
        }
        return result
    }

    override fun onPostExecute(result: String) {
        // Handle the result here
    }
}

// To use the AsyncTask in your activity or fragment:
val url = "https://api.example.com/data"
val task = MyAsyncTask()
task.execute(url)
