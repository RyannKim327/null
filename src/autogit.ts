// Importing necessary modules
import axios from 'axios';

// Define an interface for the structure of the data returned by the API
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
    console.log('Fetched Posts:', response.data);
    return response.data; // Return the fetched posts
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error; // Re-throw the error for further handling if needed
  }
}

// Function to display a specific post by ID
async function displayPostById(postId: number): Promise<void> {
  try {
    const posts = await fetchPosts(); // Fetch all posts
    const post = posts.find((p) => p.id === postId); // Find the post with the given ID

    if (post) {
      console.log(`Post Found - ID: ${post.id}, Title: "${post.title}"`);
    } else {
      console.log(`No post found with ID: ${postId}`);
    }
  } catch (error) {
    console.error('Error displaying post:', error);
  }
}

// Main function to execute the program
async function main() {
  console.log('Fetching posts from the API...');
  
  // Display a random post by ID (e.g., ID between 1 and 100)
  const randomPostId = Math.floor(Math.random() * 100) + 1;
  await displayPostById(randomPostId);
}

// Run the main function
main();
Fetching posts from the API...
Fetched Posts: [ { userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati...', body: 'quia et suscipit...' }, ... ]
Post Found - ID: 42, Title: "id labore ex et quam laborum"
