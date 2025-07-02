mkdir typescript-api-example
cd typescript-api-example
npm init -y
npm install typescript @types/node axios
npx tsc --init
import axios from "axios";

async function fetchPosts() {
    try {
        // Make a GET request to the JSONPlaceholder posts endpoint
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        
        // Log the response data
        console.log("Posts:", response.data);

        // Optionally, you can do something with the posts
        response.data.forEach((post: { id: number; title: string }) => {
            console.log(`Post ID: ${post.id}, Title: ${post.title}`);
        });
    } catch (error) {
        // Handle error
        if (axios.isAxiosError(error)) {
            console.error("Error fetching posts:", error.message);
        } else {
            console.error("Unexpected error:", error);
        }
    }
}

// Call the fetchPosts function
fetchPosts();
npx tsc
node dist/index.js
Posts: [Array of post objects...]
Post ID: 1, Title: Lorem ipsum dolor sit amet
Post ID: 2, Title: Qui est esse?
...
