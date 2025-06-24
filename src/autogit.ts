import axios, { AxiosError, AxiosResponse } from 'axios';

// Define an interface for the expected response data structure
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Function to fetch a post by its ID
async function fetchPostById(postId: number): Promise<Post | null> {
  try {
    // Make the GET request using Axios
    const response: AxiosResponse<Post> = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    // Return the fetched post data
    return response.data;
  } catch (error) {
    // Handle errors
    if (error instanceof AxiosError) {
      console.error(`Axios Error: ${error.message}`);
    } else {
      console.error('An unexpected error occurred:', error);
    }

    // Return null in case of an error
    return null;
  }
}

// Example usage of the fetchPostById function
(async () => {
  const postId = 1; // You can change this ID to test with other posts
  const post = await fetchPostById(postId);

  if (post) {
    console.log('Fetched Post:', post);
  } else {
    console.log('Failed to fetch the post.');
  }
})();
