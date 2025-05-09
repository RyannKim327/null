// Import necessary types from Node.js (if applicable)
import fetch from 'node-fetch';

// Define an interface for a User
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

// Function to fetch users from JSONPlaceholder API
async function fetchUsers(): Promise<void> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // Check if the response is ok (status code in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const users: User[] = await response.json();
        
        // Print each user's name to the console
        users.forEach(user => {
            console.log(`User: ${user.name}, Username: ${user.username}`);
        });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

// Call the function to fetch users
fetchUsers();
npm install node-fetch
