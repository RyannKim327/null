// Define the shape of a Post object
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
    posts.forEach(post => {
      console.log(`Post #${post.id}: ${post.title}`);
    });
  } catch (error) {
    console.error('Failed to fetch posts:', error);
  }
}

fetchPosts();
