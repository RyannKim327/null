npm install axios
npm install --save-dev @types/axios
// Import Axios
import axios from 'axios';

// Define a type for the expected response data
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Function to fetch posts
const fetchPosts = async () => {
  try {
    // Make a GET request to the JSONPlaceholder API
    const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    
    // Log the data received from the API
    console.log('Posts:', response.data);
  } catch (error) {
    // Handle errors
    if (axios.isAxiosError(error)) {
      console.error('Error message:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
};

// Call the function to fetch posts
fetchPosts();
