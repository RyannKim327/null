import axios from 'axios';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function fetchUser(userId: number): Promise<User | null> {
  try {
    const response = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    return null;
  }
}

(async () => {
  const user = await fetchUser(1);
  if (user) {
    console.log(`User #${user.id}: ${user.name} (${user.email})`);
  } else {
    console.log('No user found.');
  }
})();
