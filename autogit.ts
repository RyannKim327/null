// user.ts - Defines a User interface
export interface User {
  id: number;
  name: string;
  email: string;
}

// api.ts - Contains the function for fetching users from the API
const API_URL = 'https://jsonplaceholder.typicode.com/users'; // Example API endpoint

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: User[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw error;
  }
};

// main.ts - Main file to execute the code
import { fetchUsers } from './api';

const displayUsers = async () => {
  const userListElement = document.getElementById('user-list'); // Assuming an element with id 'user-list'

  if (userListElement) {
    try {
      const users = await fetchUsers();
      users.forEach(user => {
        const userItem = document.createElement('li');
        userItem.textContent = `${user.name} (${user.email})`;
        userListElement.appendChild(userItem);
      });
    } catch (error) {
      userListElement.textContent = 'Failed to load users.';
    }
  }
};

// Initialize the application
displayUsers();
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TypeScript API Example</title>
</head>
<body>
    <h1>Users List</h1>
    <ul id="user-list"></ul>
    <script src="dist/main.js" type="module"></script>  <!-- Adjust the path as needed -->
</body>
</html>
tsc
