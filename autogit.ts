interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPost(postId: number): Promise<Post> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  if (!response.ok) {
    throw new Error(`Error fetching post: ${response.statusText}`);
  }

  const data: Post = await response.json();
  return data;
}

// Usage example
fetchPost(1)
  .then(post => console.log(post))
  .catch(error => console.error(error));
