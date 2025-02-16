// Define an interface for the data structure we expect
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Function to fetch posts
async function fetchPosts(): Promise<Post[]> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not okay');
        }
        const  Post[] = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return [];
    }
}

// Call the function and log the results
fetchPosts().then(posts => {
    console.log(posts);
});
