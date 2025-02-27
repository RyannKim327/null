// Importing necessary types
import axios from "axios";

// Define an interface for the expected response data
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Fetch posts from the API
const fetchPosts = async (): Promise<Post[]> => {
    try {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error; // Rethrow the error for handling in calling function
    }
};

// Function to display posts
const displayPosts = async () => {
    const posts = await fetchPosts();
    posts.forEach(post => {
        console.log(`Title: ${post.title}`);
        console.log(`Body: ${post.body}`);
        console.log('---');
    });
};

// Call the displayPosts function
displayPosts();
npm install axios
