// Example TypeScript code that fetches data from a public API

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<void> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const posts: Post[] = await response.json();
    console.log('Posts fetched:', posts);
  } catch (error) {
    console.error('Failed to fetch posts:', error);
  }
}

fetchPosts();
