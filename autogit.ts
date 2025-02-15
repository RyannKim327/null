import axios from 'axios';

// Define an interface for the data you expect from the API
interface ApiResponse {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Function to fetch data from an API
async function fetchData(url: string): Promise<void> {
    try {
        const response = await axios.get<ApiResponse[]>(url);
        const data = response.data;

        console.log('Fetched ', data);

        // You can process the data here
        data.forEach(item => {
            console.log(`Title: ${item.title}`);
        });
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error message:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }
    }
}

// Example usage
const API_URL = 'https://jsonplaceholder.typicode.com/posts';
fetchData(API_URL);
npm install axios
