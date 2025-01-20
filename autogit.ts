import axios, { AxiosResponse } from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  async getUsers(): Promise<User[]> {
    try {
      const response: AxiosResponse<User[]> = await axios.get(this.apiUrl);
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async getUserById(id: number): Promise<User | null> {
    try {
      const response: AxiosResponse<User> = await axios.get(`${this.apiUrl}/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

const userService = new UserService();

async function main() {
  const users: User[] = await userService.getUsers();
  console.log(users);

  const user: User | null = await userService.getUserById(1);
  console.log(user);
}

main();
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com"
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "email": "janedoe@example.com"
  },
  ...
]
{
  "id": 1,
  "name": "John Doe",
  "email": "johndoe@example.com"
}
