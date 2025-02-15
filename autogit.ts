import axios from 'axios';

// Define an interface for the response data
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Function to fetch posts
const fetchPosts = async () => {
  try {
    const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;

    // Log the titles of the posts
    posts.forEach(post => {
      console.log(`Post ${post.id}: ${post.title}`);
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching posts:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
};

// Call the function
fetchPosts();
npm install axios
npm install typescript --save-dev
