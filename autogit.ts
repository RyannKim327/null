import axios from 'axios';

// Define the user interface
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

const fetchUsers = async () => {
    try {
        // Make a GET request to the API
        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
        
        // Log the list of users
        const users = response.data;
        console.log('Users:', users);
    } catch (error) {
        // Handle any errors
        if (axios.isAxiosError(error)) {
            console.error('Error:', error.message);
        } else {
            console.error('Unexpected Error:', error);
        }
    }
};

// Call the function to fetch users
fetchUsers();
npm install axios
