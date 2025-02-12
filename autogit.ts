// Define an interface for the expected data structure
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Function to fetch posts and log them to the console
async function fetchPosts(): Promise<void> {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Check if the response is ok (status code in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON from the response
        const posts: Post[] = await response.json();
        
        // Log the posts to the console
        console.log(posts);
    } catch (error) {
        // Log any errors to the console
        console.error('Error fetching posts:', error);
    }
}

// Call the function to fetch posts
fetchPosts();
