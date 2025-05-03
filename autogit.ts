// Import fetch for environments like Node.js (skip in browsers)
import fetch from 'node-fetch';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const posts: Post[] = await response.json();
  return posts;
}

(async () => {
  try {
    const posts = await fetchPosts();
    posts.forEach(post => {
      console.log(`Post #${post.id}: ${post.title}`);
    });
  } catch (error) {
    console.error('Failed to fetch posts:', error);
  }
})();
