import android.os.AsyncTask
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Response

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val asyncTask = AsyncConnectTask()
        asyncTask.execute("https://jsonplaceholder.typicode.com/todos/1")
    }

    internal class AsyncConnectTask : AsyncTask<String, Void, String>() {

        override fun doInBackground(vararg url: String): String {
            val client = OkHttpClient()
            val request = Request.Builder().url(url[0]).build()

            try {
                val response = client.newCall(request).execute()
                if (response.isSuccessful) {
                    return response.body?.string()!!
                } else {
                    return "Error: ${response.code()}"
                }
            } catch (e: Exception) {
                return "Error: ${e.message}"
            }
        }

        override fun onPostExecute(result: String) {
            Log.d("AsyncTask", result)
        }
    }
}
