import axios, { AxiosError } from 'axios';

// Define an interface for the structure of the data we expect to receive
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Function to fetch a single post by ID from the JSONPlaceholder API
async function fetchPostById(postId: number): Promise<Post | null> {
  try {
    const response = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    
    // Return the fetched post data
    return response.data;
  } catch (error) {
    // Handle errors using AxiosError type for better error handling
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error('Axios Error:', axiosError.message);
      if (axiosError.response) {
        console.error('Response Data:', axiosError.response.data);
        console.error('Status Code:', axiosError.response.status);
      }
    } else {
      console.error('Unknown Error:', error);
    }

    // Return null in case of an error
    return null;
  }
}

// Example usage of the fetchPostById function
(async () => {
  const postId = 1; // Fetching the post with ID 1
  const post = await fetchPostById(postId);

  if (post) {
    console.log('Fetched Post:', post);
  } else {
    console.log('Failed to fetch the post.');
  }
})();
Fetched Post: {
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit...'
}
Axios Error: Request failed with status code 404
Response Data: { error: "Post not found" }
Status Code: 404
Failed to fetch the post.
npm install axios
