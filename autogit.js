import android.os.AsyncTask
import java.io.IOException
import java.net.HttpURLConnection
import java.net.URL

class ConnectAsyncTask : AsyncTask<String, Void, String>() {

    override fun doInBackground(vararg urls: String): String {
        val urlString = urls[0]
        val url = URL(urlString)
        
        return try {
            val urlConnection = url.openConnection() as HttpURLConnection
            urlConnection.requestMethod = "GET"
            urlConnection.connect()
            
            if (urlConnection.responseCode != HttpURLConnection.HTTP_OK) {
                throw IOException("HTTP error code: ${urlConnection.responseCode}")
            }
            
            val inputStream = urlConnection.inputStream
            val response = inputStream.bufferedReader().use { it.readText() }
            
            inputStream.close()
            response
        } catch (e: IOException) {
            e.printStackTrace()
            "Error: ${e.message}"
        }
    }

    override fun onPostExecute(result: String) {
        // Handle the result here
    }
}
