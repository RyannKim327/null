import axios from 'axios';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function getUsers(): Promise<User[]> {
  try {
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

(async () => {
  const users = await getUsers();
  users.forEach(user => {
    console.log(`${user.name} (${user.username}) - ${user.email}`);
  });
})();
