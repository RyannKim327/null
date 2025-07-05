// Define the Post interface to represent the structure of the data
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Function to fetch posts from the JSONPlaceholder API
async function fetchPosts(): Promise<Post[]> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        // Check if the response is not ok (status code not in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON response
        const posts: Post[] = await response.json();
        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

// Call the fetchPosts function and log the results
fetchPosts().then(posts => {
    console.log('Fetched Posts:', posts);
});
