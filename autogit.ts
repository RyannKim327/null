import kotlinx.coroutines.*
import java.net.URL

// Function to simulate async connection
suspend fun fetchData(): String {
    return withContext(Dispatchers.IO) {
        // Simulate network call
        URL("https://jsonplaceholder.typicode.com/posts/1").readText()
    }
}

fun main() {
    runBlocking {
        try {
            val result = fetchData()
            println("Received data: $result")
        } catch (e: Exception) {
            println("Error fetching data: ${e.message}")
        }
    }
}
