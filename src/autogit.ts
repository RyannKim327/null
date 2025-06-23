import axios, { AxiosResponse, AxiosError } from 'axios';

// Define an interface for the expected response data structure
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Function to fetch posts using Axios
async function fetchPosts(): Promise<void> {
  try {
    // Make a GET request to the JSONPlaceholder API
    const response: AxiosResponse<Post[]> = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    // Extract the data from the response
    const posts: Post[] = response.data;

    // Log each post's title and body
    posts.forEach((post) => {
      console.log(`Post ID: ${post.id}`);
      console.log(`Title: ${post.title}`);
      console.log(`Body: ${post.body}`);
      console.log('-------------------------');
    });
  } catch (error) {
    // Handle any errors that occur during the request
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      // The request was made and the server responded with a status code
      console.error('Error Response:', axiosError.response.data);
      console.error('Status Code:', axiosError.response.status);
    } else if (axiosError.request) {
      // The request was made but no response was received
      console.error('No response received:', axiosError.request);
    } else {
      // Something happened in setting up the request
      console.error('Error Message:', axiosError.message);
    }
  }
}

// Call the function to fetch and display posts
fetchPosts();
Post ID: 1
Title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
Body: quia et suscipit\nsuscipit...
-------------------------
Post ID: 2
Title: qui est esse
Body: est rerum tempore vitae\nsequi sint...
-------------------------
...
