// Import necessary types from axios
import axios, { AxiosResponse } from 'axios';

// Define an interface for the data we expect to receive
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Function to fetch posts from the JSONPlaceholder API
async function fetchPosts(): Promise<void> {
    try {
        // Make a GET request to the API
        const response: AxiosResponse<Post[]> = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        
        // Log the response data
        console.log('Posts fetched successfully:');
        response.data.forEach(post => {
            console.log(`Post ID: ${post.id}`);
            console.log(`Title: ${post.title}`);
            console.log(`Body: ${post.body}`);
            console.log('--------------------------');
        });
    } catch (error) {
        // Handle errors
        if (axios.isAxiosError(error)) {
            console.error('Error fetching posts:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }
    }
}

// Call the function to fetch posts
fetchPosts();
