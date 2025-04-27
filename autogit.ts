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
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    const users: User[] = response.data;

    console.log('Fetched Users:');
    users.forEach(user => {
      console.log(`ID: ${user.id}, Name: ${user.name}, Username: ${user.username}, Email: ${user.email}`);
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching users:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
}

// Call the function to fetch users
fetchUsers();
