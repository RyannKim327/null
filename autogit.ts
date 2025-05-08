// Importing node-fetch for environments outside browsers
import fetch from 'node-fetch';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchFirstPost(): Promise<void> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const posts: Post[] = await response.json();
    console.log('Title of the first post:', posts[0].title);
  } catch (error) {
    console.error('Failed to fetch posts:', error);
  }
}

fetchFirstPost();
