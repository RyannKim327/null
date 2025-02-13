// Define an interface for the data structure we'll be fetching
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
        
        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const posts: Post[] = await response.json();
        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return []; // Return an empty array in case of an error
    }
}

// Function to display posts on the console
function displayPosts(posts: Post[]): void {
    posts.forEach(post => {
        console.log(`Post ID: ${post.id}`);
        console.log(`Title: ${post.title}`);
        console.log(`Body: ${post.body}`);
        console.log('--------------------------');
    });
}

// Main function to orchestrate fetching and displaying posts
async function main(): Promise<void> {
    const posts = await fetchPosts();
    displayPosts(posts);
}

// Invoke the main function
main();
