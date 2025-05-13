// Importing fetch type declarations (optional but useful)
import fetch, { Response } from 'node-fetch';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Post[]> {
  const response: Response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }
  const posts: Post[] = await response.json();
  return posts;
}

(async () => {
  try {
    const posts = await fetchPosts();
    console.log(`Fetched ${posts.length} posts`);
    console.log(posts.slice(0, 3)); // Print first 3 posts as sample
  } catch (error) {
    console.error('Failed to fetch posts:', error);
  }
})();
