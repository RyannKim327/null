// Define an interface for the structure of the data we expect from the API
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Function to fetch data from the API
async function fetchPosts(): Promise<Post[]> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    // Check if the response status is OK (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON and return it
    const posts: Post[] = await response.json();
    return posts;
  } catch (error) {
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

// Main function to execute the logic
async function main() {
  console.log('Fetching posts from the API...');
  const posts = await fetchPosts();

  if (posts.length > 0) {
    console.log('Successfully fetched posts:');
    displayPosts(posts);
  } else {
    console.log('No posts available or an error occurred.');
  }
}

// Run the main function
main();
Fetching posts from the API...
Successfully fetched posts:
Post ID: 1
Title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
Body: quia et suscipit\nsuscipit...
-----------------------------
Post ID: 2
Title: qui est esse
Body: est rerum tempore vitae\nsequi sint...
-----------------------------
...
