// Define an interface for the expected data structure
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPost(postId: number): Promise<void> {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const post: Post = await response.json();
    console.log(`Post Title: ${post.title}`);
    console.log(`Post Body: ${post.body}`);
  } catch (error) {
    console.error('Error fetching post:', error);
  }
}

// Call the function with a specific post ID
fetchPost(1);
