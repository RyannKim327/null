import axios from 'axios';

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
    console.error('Error fetching users:', error);
    return [];
  }
}

(async () => {
  const users = await fetchUsers();
  users.forEach(user => {
    console.log(`${user.name} (${user.username}): ${user.email}`);
  });
})();
