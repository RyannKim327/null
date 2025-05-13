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
      throw new Error(`Error fetching post: ${response.statusText}`);
    }
    const post: Post = await response.json();
    console.log(post);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

// Example usage:
fetchPost(1);
