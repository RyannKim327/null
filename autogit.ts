npm install axios
import axios from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async () => {
  try {
    const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;

    console.log('Posts fetched:', posts);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching posts:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
};

fetchPosts();
tsc fetchData.ts
node fetchData.js
