interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Post[]> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Post[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return [];
  }
}

// Example usage:
fetchPosts().then(posts => {
  console.log('Received posts:', posts.slice(0, 3)); // just log first 3 for brevity
});
