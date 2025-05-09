// Define the structure of the API response item
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
    
    // Just log the title of the first 5 posts
    posts.slice(0, 5).forEach(post => {
      console.log(`Post #${post.id} title: ${post.title}`);
    });
  } catch (error) {
    console.error('Failed to fetch posts:', error);
  }
}

fetchPosts();
