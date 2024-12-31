class AsyncHttpTask(private val url: String) : AsyncTask<Unit, Unit, String>() {
    override fun doInBackground(vararg params: Unit?): String {
        val connection = URL(url).openConnection() as HttpURLConnection
        try {
            val inputStream = connection.inputStream
            return inputStream.bufferedReader().use { it.readText() }
        } finally {
            connection.disconnect()
        }
    }

    override fun onPostExecute(result: String) {
        // Handle the response from the server here
        Log.d("AsyncHttpTask", result)
    }
}

// To execute the async task
val url = "https://api.example.com/data"
AsyncHttpTask(url).execute()
