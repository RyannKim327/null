// Define an interface to describe the data structure we expect
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Function to fetch posts from a public API
async function fetchPosts(): Promise<void> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Parse the JSON data
        const posts: Post[] = await response.json();
        
        // Log each post title
        posts.forEach(post => {
            console.log(`Title: ${post.title}`);
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Call the function to fetch posts
fetchPosts();
