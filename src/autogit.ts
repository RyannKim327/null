// Define an interface for the expected structure of the data
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Function to fetch data from the API
async function fetchPosts(): Promise<void> {
  try {
    // Make a GET request using fetch
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    // Check if the response status is OK (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON
    const posts: Post[] = await response.json();

    // Process and display the data
    console.log('Fetched Posts:');
    posts.forEach((post) => {
      console.log(`ID: ${post.id}, Title: ${post.title}`);
    });
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error('Error fetching posts:', error);
  }
}

// Call the function to fetch and display posts
fetchPosts();
Fetched Posts:
ID: 1, Title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
ID: 2, Title: qui est esse
ID: 3, Title: ea molestias quasi exercitationem repellat qui ipsa sit aut
...
