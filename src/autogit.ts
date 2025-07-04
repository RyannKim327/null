npm install axios
import axios from 'axios';

// Define an interface for the user data
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

// Function to fetch users
const fetchUsers = async (): Promise<User[]> => {
    try {
        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching users:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        throw error; // Rethrow the error for further handling if needed
    }
};

// Main function to run the code
const main = async () => {
    try {
        const users = await fetchUsers();
        console.log('Fetched Users:', users);
    } catch (error) {
        console.error('Failed to fetch users:', error);
    }
};

// Execute the main function
main();
tsc index.ts
node index.js
