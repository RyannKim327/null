// Define an interface for the structure of the data returned by the API
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

// Function to display the fetched posts
function displayPosts(posts: Post[]): void {
  console.log('Fetched Posts:');
  posts.forEach((post) => {
    console.log(`ID: ${post.id}, Title: ${post.title}`);
  });
}

// Main function to execute the program
async function main() {
  console.log('Fetching posts from the API...');
  const posts = await fetchPosts();
  
  if (posts.length > 0) {
    displayPosts(posts);
  } else {
    console.log('No posts available.');
  }
}

// Run the main function
main();
Fetching posts from the API...
Fetched Posts:
ID: 1, Title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
ID: 2, Title: qui est esse
ID: 3, Title: ea molestias quasi exercitationem repellat qui ipsa sit aut
...
