import axios from 'axios';

// Define the shape of the data we expect from the API
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
    console.error('Error fetching user:', error);
    return null;
  }
}

// Example usage
fetchUser(1).then(user => {
  if (user) {
    console.log(`User: ${user.name} (${user.email})`);
  } else {
    console.log('User not found');
  }
});
