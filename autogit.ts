// Define an interface for the Post
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Function to fetch posts
async function fetchPosts(): Promise<Post[]> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const posts: Post[] = await response.json();
        return posts;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return [];
    }
}

// Main function to execute the fetchPosts function
async function main() {
    const posts = await fetchPosts();
    
    console.log('Posts fetched from API:', posts);
}

// Execute the main function
main();
