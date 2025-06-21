// Import necessary modules
import axios from 'axios';

// Define the interface for the data structure
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Function to fetch posts from the API
async function fetchPosts(): Promise<Post[]> {
  try {
    const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    return response.data; // Return the parsed JSON data
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error; // Re-throw the error for further handling
  }
}

// Function to create a new post using the API
async function createPost(newPost: Omit<Post, 'id'>): Promise<Post> {
  try {
    const response = await axios.post<Post>('https://jsonplaceholder.typicode.com/posts', newPost);
    return response.data; // Return the created post
  } catch (error) {
    console.error('Error creating post:', error);
    throw error; // Re-throw the error for further handling
  }
}

// Main function to demonstrate usage
(async () => {
  try {
    // Fetch all posts
    console.log('Fetching posts...');
    const posts = await fetchPosts();
    console.log('Fetched posts:', posts);

    // Create a new post
    console.log('Creating a new post...');
    const newPostData = {
      userId: 1,
      title: 'New Post Title',
      body: 'This is the body of the new post.',
    };
    const createdPost = await createPost(newPostData);
    console.log('Created post:', createdPost);
  } catch (error) {
    console.error('An error occurred during execution:', error);
  }
})();
