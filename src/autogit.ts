// Define an interface for the structure of the data we expect from the API
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Function to fetch posts from the JSONPlaceholder API
async function fetchPosts(): Promise<Post[]> {
  try {
    // Fetch data from the API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    // Check if the response status is OK (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON and return it
    const posts: Post[] = await response.json();
    return posts;
  } catch (error) {
    // Handle errors (e.g., network issues, invalid URL, etc.)
    console.error('Error fetching posts:', error);
    return [];
  }
}

// Function to display posts in the console
function displayPosts(posts: Post[]): void {
  posts.forEach((post) => {
    console.log(`Post ID: ${post.id}`);
    console.log(`Title: ${post.title}`);
    console.log(`Body: ${post.body}`);
    console.log('-----------------------------');
  });
}

// Main function to execute the program
async function main() {
  console.log('Fetching posts...');
  const posts = await fetchPosts();

  if (posts.length > 0) {
    console.log('Fetched posts successfully!');
    displayPosts(posts);
  } else {
    console.log('No posts available.');
  }
}

// Run the main function
main();
