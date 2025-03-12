// Define an interface for the data we expect from the API
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Function to fetch posts from the API
async function fetchPosts(): Promise<Post[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    // Parse the JSON response
    const data: Post[] = await response.json();
    return data;
}

// Call the fetchPosts function and handle the response
fetchPosts()
    .then(posts => {
        console.log('Fetched Posts:', posts);
    })
    .catch(error => {
        console.error('Error fetching posts:', error);
    });
