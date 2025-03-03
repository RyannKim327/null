npm install axios
import axios from 'axios';

// Define a type for the user data
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

// Function to fetch user data from API
const fetchUserData = async (userId: number): Promise<User> => {
  try {
    const response = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle known axios errors
      console.error('Error message:', error.message);
      throw new Error('Failed to fetch user data');
    } else {
      // Handle unexpected errors
      console.error('Unexpected error:', error);
      throw new Error('An unexpected error occurred');
    }
  }
};

// Example usage
const userId = 1;

fetchUserData(userId)
  .then(user => {
    console.log('Fetched User Data:', user);
  })
  .catch(error => {
    console.error('Error fetching user ', error.message);
  });
