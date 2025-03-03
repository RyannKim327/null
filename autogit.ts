npm install axios
npm install --save-dev @types/axios
import axios from 'axios';

// Define an interface for the response data
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function fetchUsers() {
  try {
    // Make a GET request to the API
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');

    // Assuming the response data is an array of users
    const users: User[] = response.data;

    // Log each user's details
    users.forEach(user => {
      console.log(`ID: ${user.id}`);
      console.log(`Name: ${user.name}`);
      console.log(`Username: ${user.username}`);
      console.log(`Email: ${user.email}`);
      console.log('----------------------');
    });
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
