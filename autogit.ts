import axios, { AxiosResponse } from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

const apiEndpoint = 'https://jsonplaceholder.typicode.com/users';

async function getUsers(): Promise<User[]> {
  try {
    const response: AxiosResponse<User[]> = await axios.get(apiEndpoint);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function main() {
  const users: User[] = await getUsers();
  console.log(users);
}

main();
