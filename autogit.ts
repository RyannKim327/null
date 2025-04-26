npm install axios
import axios from 'axios';

// Define a User interface to type our data
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function fetchUsers(): Promise<void> {
  try {
    // Make a GET request to the public API
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    
    // Destructure the data from the response
    const users = response.data;

    // Log the users' names to the console
    users.forEach((user) => {
      console.log(`${user.name} - ${user.username}`);
    });
  } catch (error) {
    // Handle error appropriately
    if (axios.isAxiosError(error)) {
      console.error('Error message:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
}

// Call the function to fetch users
fetchUsers();
tsc fetchUsers.ts
node fetchUsers.js
