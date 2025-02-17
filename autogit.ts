// Define an interface for the data structure
interface ApiResponse {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Create an async function to fetch data
async function fetchData(url: string) {
    try {
        const response = await fetch(url);
        
        // Check if the response is okay (status in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const  ApiResponse[] = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching ', error);
    }
}

// Call the function with a random API endpoint
const apiURL = 'https://jsonplaceholder.typicode.com/posts';
fetchData(apiURL);
