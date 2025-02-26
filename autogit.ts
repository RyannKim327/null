import axios from 'axios';

// Define a TypeScript interface for the response data
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<void> => {
  try {
    // Make a GET request to a public API endpoint
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    
    // Log the response data
    response.data.forEach(user => {
      console.log(`ID: ${user.id}, Name: ${user.name}, Username: ${user.username}, Email: ${user.email}`);
    });
  } catch (error) {
    // Handle errors
    if (axios.isAxiosError(error)) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error('An unexpected error occurred', error);
    }
  }
};

// Call the function to fetch users
fetchUsers();
