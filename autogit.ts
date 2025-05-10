import axios from 'axios';

// Define the interface for the User
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

// Function to fetch users
const fetchUsers = async (): Promise<void> => {
  try {
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    const users = response.data;

    // Log the users to the console
    console.log('Fetched Users:', users);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error message:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
};

// Call the fetchUsers function
fetchUsers();
npm install axios typescript
npx tsc yourFile.ts && node yourFile.js
