import axios, { AxiosResponse } from 'axios';

// Define an interface for the expected data structure
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function fetchUser(userId: number): Promise<void> {
  try {
    const response: AxiosResponse<User> = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = response.data;
    console.log(`User: ${user.name} (${user.email})`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`Error fetching user: ${error.message}`);
    } else {
      console.error(`Unexpected error: ${error}`);
    }
  }
}

// Fetch user with ID 1
fetchUser(1);
