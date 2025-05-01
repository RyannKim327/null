// Define the shape of the data we're expecting from the API
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Async function to fetch posts from JSONPlaceholder API
async function fetchPosts(): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: Post[] = await response.json();
  return data;
}

// Run the function and log the first post's title
fetchPosts()
  .then(posts => {
    console.log('First post title:', posts[0].title);
  })
  .catch(error => {
    console.error('Error fetching posts:', error);
  });
