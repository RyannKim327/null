// Install the types for the Fetch API if using Node.js environment
// npm install --save-dev @types/node-fetch

// Importing the necessary modules
import fetch from 'node-fetch';

// Define an interface for the expected data structure
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Asynchronous function to fetch posts
async function fetchPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const posts: Post[] = await response.json();
        console.log(posts); 
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Call the function to fetch posts
fetchPosts();
npm install node-fetch
