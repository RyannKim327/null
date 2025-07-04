npm install axios
npm install --save-dev @types/axios
// Import the axios library
import axios from 'axios';

// Define an interface for the user data
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

// Function to fetch users
async function fetchUsers(): Promise<void> {
  try {
    // Make a GET request to the API
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    
    // Log the response data
    const users: User[] = response.data;
    console.log('List of Users:');
    users.forEach(user => {
      console.log(`ID: ${user.id}, Name: ${user.name}, Username: ${user.username}, Email: ${user.email}`);
    });
  } catch (error) {
    // Handle error gracefully
    if (axios.isAxiosError(error)) {
      console.error('Error message:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
}

// Call the function to fetch users
fetchUsers();
tsc yourfile.ts
node yourfile.js
