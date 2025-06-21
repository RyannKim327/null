import axios, { AxiosError, AxiosResponse } from 'axios';

// Define an interface for the expected response data structure
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Function to fetch a post by ID using Axios
async function fetchPostById(postId: number): Promise<Post | null> {
  try {
    const response: AxiosResponse<Post> = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    // Return the fetched post data
    return response.data;
  } catch (error) {
    // Handle errors using AxiosError type for better type safety
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;

      // Log detailed error information
      if (axiosError.response) {
        console.error('Server responded with error status:', axiosError.response.status);
        console.error('Error response data:', axiosError.response.data);
      } else if (axiosError.request) {
        console.error('No response received from server:', axiosError.request);
      } else {
        console.error('Error message:', axiosError.message);
      }
    } else {
      console.error('An unexpected error occurred:', error);
    }

    // Return null in case of an error
    return null;
  }
}

// Example usage of the fetchPostById function
(async () => {
  const postId = 1; // Fetching post with ID 1
  const post = await fetchPostById(postId);

  if (post) {
    console.log('Fetched Post:', post);
  } else {
    console.log('Failed to fetch the post.');
  }
})();
