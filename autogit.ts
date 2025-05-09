mkdir ts-api-example
cd ts-api-example
npm init -y
npm install typescript axios @types/node
npx tsc --init
import axios from 'axios';

// Define an interface for the data we expect to receive
interface Post {
    id: number;
    title: string;
    body: string;
}

// Function to fetch posts from JSONPlaceholder API
const fetchPosts = async (): Promise<Post[]> => {
    try {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

// Main function to run the application
const main = async () => {
    const posts = await fetchPosts();
    console.log('Fetched Posts:');
    posts.forEach(post => {
        console.log(`ID: ${post.id}`);
        console.log(`Title: ${post.title}`);
        console.log(`Body: ${post.body}`);
        console.log('------------------------');
    });
};

// Execute the main function
main().catch(error => {
    console.error('Error in main function:', error);
});
npx tsc
node app.js
