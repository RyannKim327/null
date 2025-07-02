// Import fetch if you're using Node.js with no built-in fetch support
// import fetch from 'node-fetch';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Function to fetch posts from JSONPlaceholder API
async function fetchPosts(): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error(`Error fetching posts: ${response.statusText}`);
  }
  const posts: Post[] = await response.json();
  return posts;
}

// Usage example
fetchPosts()
  .then(posts => {
    console.log(`Fetched ${posts.length} posts:`);
    posts.slice(0, 5).forEach(post => {
      console.log(`Title: ${post.title}`);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
