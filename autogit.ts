// Importing necessary typings for fetch
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function fetchPosts(): Promise<Post[]> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        // Check if the response is okay (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON data from the response
        const posts: Post[] = await response.json();
        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

// Example usage
fetchPosts()
    .then(posts => {
        console.log('Fetched Posts:', posts);
    })
    .catch(error => {
        console.error('Error:', error);
    });
