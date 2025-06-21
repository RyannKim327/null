// Function to fetch data from a public API
async function fetchData<T>(url: string): Promise<T | null> {
  try {
    console.log(`Fetching data from: ${url}`);
    
    // Make the HTTP GET request using fetch
    const response = await fetch(url);

    // Check if the response status is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response body as JSON
    const data = await response.json();

    // Return the parsed JSON data
    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch process
    console.error("Error fetching data:", error);
    return null;
  }
}

// Example usage of the fetchData function
(async () => {
  // Define the API endpoint URL
  const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

  // Call the fetchData function and handle the result
  const postData = await fetchData<{ userId: number; id: number; title: string; body: string }>(apiUrl);

  if (postData) {
    console.log("Fetched Post Data:");
    console.log(`User ID: ${postData.userId}`);
    console.log(`Post ID: ${postData.id}`);
    console.log(`Title: ${postData.title}`);
    console.log(`Body: ${postData.body}`);
  } else {
    console.log("Failed to fetch post data.");
  }
})();
Fetching data from: https://jsonplaceholder.typicode.com/posts/1
Fetched Post Data:
User ID: 1
Post ID: 1
Title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
Body: quia et suscipit
suscipit recusandae consequuntur expedita et cum
reprehenderit molestiae ut ut quas totam
nostrum rerum est autem sunt rem eveniet architecto
Fetching data from: https://jsonplaceholder.typicode.com/posts/1
Error fetching data: TypeError: Failed to fetch
Failed to fetch post data.
