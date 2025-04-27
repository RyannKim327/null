import axios, { AxiosResponse } from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPost(postId: number): Promise<Post | void> {
  try {
    const response: AxiosResponse<Post> = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    console.log('Post fetched:', response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.status, error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
}

// Fetch post with ID 1
fetchPost(1);
