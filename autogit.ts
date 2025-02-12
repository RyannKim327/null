// Importing necessary modules
import fetch from 'node-fetch';

// Define an interface for the User
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

// Function to fetch users
const fetchUsers = async (): Promise<User[]> => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  
  try {
    const response = await fetch(url);
    
    // Check if response is OK (status in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    // Parse JSON response
    const users: User[] = await response.json();
    return users;
    
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

// Call the function and log the result
fetchUsers().then(users => {
  console.log(users);
});
npm install node-fetch
