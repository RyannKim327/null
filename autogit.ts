npm install axios
# or
yarn add axios
import axios from 'axios';

// Define the interface for the response data
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

const fetchUsers = async () => {
    try {
        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
        const users = response.data;

        // Print the user data to the console
        users.forEach(user => {
            console.log(`ID: ${user.id}, Name: ${user.name}, Username: ${user.username}, Email: ${user.email}`);
        });
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // If there is a problem related to the request
            console.error('Error message: ', error.message);
        } else {
            // Other types of errors (not related to axios)
            console.error('Unexpected error: ', error);
        }
    }
};

// Call the fetchUsers function
fetchUsers();
