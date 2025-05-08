import axios from 'axios';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function fetchUsers(): Promise<void> {
  try {
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    const users = response.data;

    users.forEach(user => {
      console.log(`${user.name} (${user.username}) - ${user.email}`);
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`Axios error: ${error.message}`);
    } else {
      console.error(`Unexpected error: ${error}`);
    }
  }
}

fetchUsers();
