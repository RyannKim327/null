import axios, { AxiosError } from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchUsers(): Promise<void> {
  try {
    // Make a GET request to a mock API endpoint
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');

    // Extract the data from the response
    const users = response.data;

    // Log the user details
    console.log('List of Users:');
    users.forEach((user) => {
      console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
    });
  } catch (error) {
    // Handle any errors that occur during the request
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        console.error('Error Response Data:', axiosError.response.data);
        console.error('Error Status Code:', axiosError.response.status);
      } else if (axiosError.request) {
        console.error('No response received from the server.');
      } else {
        console.error('Error Message:', axiosError.message);
      }
    } else {
      console.error('An unexpected error occurred:', error);
    }
  }
}

// Call the function to fetch and log users
fetchUsers();
List of Users:
ID: 1, Name: Leanne Graham, Email: Sincere@april.biz
ID: 2, Name: Ervin Howell, Email: Shanna@melissa.tv
ID: 3, Name: Clementine Bauch, Email: Nathan@yesenia.net
...
