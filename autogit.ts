npm install axios
import axios from 'axios';

// Define an interface for the data we expect to receive
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

// Function to fetch users from a public API
const fetchUsers = async (): Promise<void> => {
    try {
        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
        const users = response.data;

        // Log the users to the console
        users.forEach(user => {
            console.log(`ID: ${user.id}, Name: ${user.name}, Username: ${user.username}, Email: ${user.email}`);
        });
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error message:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }
    }
};

// Call the function to fetch users
fetchUsers();
