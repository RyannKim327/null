import axios from 'axios';

// Define an interface for the data we expect from the API
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function fetchUsers(): Promise<User[]> {
  try {
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    return [];
  }
}

(async () => {
  const users = await fetchUsers();
  users.forEach(user => {
    console.log(`${user.name} (${user.username}) - Email: ${user.email}`);
  });
})();
