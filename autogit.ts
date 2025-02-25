import axios from 'axios';

// Define an interface for the response data
interface ApiResponse {
    id: number;
    title: string;
    body: string;
}

async function fetchData(url: string) {
    try {
        // Make a GET request to the specified URL
        const response = await axios.get<ApiResponse[]>(url);
        
        // Log the response data
        console.log('Response Data:', response.data);
    } catch (error) {
        // Handle any errors
        if (axios.isAxiosError(error)) {
            console.error('Error message:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }
    }
}

// Call the fetchData function with a sample URL
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
fetchData(apiUrl);
npm install axios
