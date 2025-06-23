import axios, { AxiosResponse } from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<void> {
  try {
    console.log('Fetching posts...');

    // Make a GET request to the JSONPlaceholder API
    const response: AxiosResponse<Post[]> = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    // Extract the data from the response
    const posts: Post[] = response.data;

    // Log the fetched posts
    console.log('Fetched Posts:');
    posts.forEach((post: Post) => {
      console.log(`Post ID: ${post.id}, Title: ${post.title}`);
    });
  } catch (error) {
    // Handle errors gracefully
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
}

// Call the function to fetch and display posts
fetchPosts();
