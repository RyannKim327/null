interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<void> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    // Check if the response status is OK (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON
    const posts: Post[] = await response.json();

    // Log the fetched posts
    console.log('Fetched Posts:', posts);

    // Example: Display the titles of the first 5 posts
    console.log('Titles of the first 5 posts:');
    posts.slice(0, 5).forEach((post) => {
      console.log(`- ${post.title}`);
    });
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error('Error fetching posts:', error);
  }
}

// Call the function to fetch and display posts
fetchPosts();
Fetched Posts: [
  { userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit...' },
  ...
]
Titles of the first 5 posts:
- sunt aut facere repellat provident occaecati excepturi optio reprehenderit
- qui est esse
- ea molestias quasi exercitationem repellat qui ipsa sit aut
- eum et est occaecati
- nesciunt quas odio
Error fetching posts: Error: HTTP error! Status: 500
