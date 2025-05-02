mkdir ts-api-example
cd ts-api-example
npm init -y
npm install typescript ts-node @types/node axios
npx tsc --init
import axios from 'axios';

// Define a Post interface to describe the shape of the data we expect
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Function to fetch posts from the JSONPlaceholder API
async function fetchPosts(): Promise<Post[]> {
    try {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

// Main function to execute the fetch and log the posts
async function main() {
    const posts = await fetchPosts();
    console.log('Fetched Posts:', posts);
}

// Run the main function
main();
npx ts-node index.ts
Fetched Posts: [ { userId: 1, id: 1, title: '...', body: '...' }, { userId: 1, id: 2, title: '...', body: '...' }, ... ]
