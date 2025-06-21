import axios, { AxiosError } from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPost(postId: number): Promise<void> {
  try {
    const response = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = response.data;

    console.log('Fetched Post:');
    console.log(`ID: ${post.id}`);
    console.log(`Title: ${post.title}`);
    console.log(`Body: ${post.body}`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        console.error('Server responded with error status:', axiosError.response.status);
      } else if (axiosError.request) {
        console.error('No response received from server. Request:', axiosError.request);
      } else {
        console.error('Axios error message:', axiosError.message);
      }
    } else {
      console.error('An unexpected error occurred:', error);
    }
  }
}

// Example usage
fetchPost(1)
  .then(() => console.log('Post fetched successfully'))
  .catch((err) => console.error('Failed to fetch post:', err));
