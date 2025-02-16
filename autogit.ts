npm install axios
import axios from 'axios';

// Define an interface for the response data
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Function to fetch posts from the JSONPlaceholder API
const fetchPosts = async () => {
    try {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        const posts = response.data;

        // Log the fetched posts
        posts.forEach(post => {
            console.log(`Post ID: ${post.id}`);
            console.log(`Title: ${post.title}`);
            console.log(`Body: ${post.body}`);
            console.log('-------------------------');
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
};

// Call the function to fetch posts
fetchPosts();
