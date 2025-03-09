// Define an interface for the data we expect to receive
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Function to fetch posts from the API
async function fetchPosts(): Promise<Post[]> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const posts: Post[] = await response.json();
        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

// Call the function and log the results
fetchPosts().then(posts => {
    console.log('Fetched posts:', posts);
});
