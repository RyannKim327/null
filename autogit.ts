// Importing fetch for environments like Node.js (uncomment if needed)
// import fetch from 'node-fetch';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }
  const posts: Post[] = await response.json();
  return posts;
}

(async () => {
  try {
    const posts = await fetchPosts();
    console.log('First post:', posts[0]);
  } catch (err) {
    console.error('Failed to fetch posts:', err);
  }
})();
