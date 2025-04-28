// Define the shape of the data we're expecting
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Function to fetch a post by ID
async function fetchPost(postId: number): Promise<Post> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  if (!response.ok) {
    throw new Error(`Error fetching post: ${response.statusText}`);
  }
  const data: Post = await response.json();
  return data;
}

// Usage
fetchPost(1)
  .then(post => {
    console.log(`Title: ${post.title}`);
    console.log(`Body: ${post.body}`);
  })
  .catch(error => {
    console.error(error);
  });
