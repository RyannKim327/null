npm install axios
import axios from 'axios';

// Define an interface for the data we expect to receive
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

async function fetchUsers() {
    try {
        // Make a GET request to the JSONPlaceholder API
        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
        
        // Log the response data
        console.log('Users:', response.data);
    } catch (error) {
        // Handle any errors
        if (axios.isAxiosError(error)) {
            console.error('Error message:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }
    }
}

// Call the function to fetch users
fetchUsers();
