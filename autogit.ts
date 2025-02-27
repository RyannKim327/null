import axios from 'axios';

// Define an interface for the expected response data
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

async function fetchUsers() {
    try {
        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
        console.log('Users:', response.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error message:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }
    }
}

// Call the function to fetch users
fetchUsers();
npm install axios
