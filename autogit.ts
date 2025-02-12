import axios from 'axios';

// Define an interface for the data you expect to receive
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

// Function to fetch users from an API
const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; // Rethrow the error for further handling if necessary
  }
};

// Example usage
fetchUsers().then(users => {
  console.log('Fetched users:', users);
}).catch(error => {
  console.error('Error:', error);
});
npm install axios
