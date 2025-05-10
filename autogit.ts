import https from 'https';

// Define the Post interface
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Function to fetch posts from the API
const fetchPosts = (): Promise<Post[]> => {
    return new Promise((resolve, reject) => {
        https.get('https://jsonplaceholder.typicode.com/posts', (res) => {
            let data: string = '';

            // A chunk of data has been received.
            res.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received.
            res.on('end', () => {
                try {
                    const posts: Post[] = JSON.parse(data);
                    resolve(posts);
                } catch (error) {
                    reject(`Error parsing JSON: ${error.message}`);
                }
            });
        }).on('error', (e) => {
            reject(`Request error: ${e.message}`);
        });
    });
};

// Function to display the posts
const displayPosts = async () => {
    try {
        const posts = await fetchPosts();
        console.log('Posts fetched from API:');
        posts.forEach((post) => {
            console.log(`ID: ${post.id}, Title: ${post.title}`);
        });
    } catch (error) {
        console.error(error);
    }
};

// Call the display function
displayPosts();
