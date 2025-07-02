npm install axios
// Importing the required modules
import axios from 'axios';

// Defining an interface for the post structure
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Function to fetch posts
async function fetchPosts(): Promise<void> {
    try {
        // Making a GET request
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        
        // Logging the data received from the API
        const posts: Post[] = response.data;
        console.log('Fetched Posts:', posts);
        
        // Optionally, you can process or display the posts
        posts.forEach(post => {
            console.log(`Post ID: ${post.id}, Title: ${post.title}`);
        });
    } catch (error) {
        // Error handling
        if (axios.isAxiosError(error)) {
            console.error('Axios Error:', error.message);
        } else {
            console.error('Unexpected Error:', error);
        }
    }
}

// Calling the fetchPosts function
fetchPosts();
tsc yourFileName.ts
node yourFileName.js
