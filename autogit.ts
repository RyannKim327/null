npm install axios
import axios from 'axios';

// Define an interface for the data we expect to receive
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Function to fetch posts
const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching posts:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error; // Rethrow the error for further handling if needed
  }
};

// Call the function and log the results
fetchPosts()
  .then(posts => {
    console.log('Fetched posts:', posts);
  })
  .catch(error => {
    console.error('Failed to fetch posts:', error);
  });
