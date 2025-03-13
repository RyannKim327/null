interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

class UserService {
  private baseUrl: string = 'https://jsonplaceholder.typicode.com/users';

  async fetchUsers(): Promise<User[]> {
    try {
      const response = await fetch(this.baseUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const users: User[] = await response.json();
      return users;
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  }

  async fetchUserById(id: number): Promise<User | null> {
    try {
      const response = await fetch(`${this.baseUrl}/${id}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const user: User = await response.json();
      return user;
    } catch (error) {
      console.error(`Error fetching user with id ${id}:`, error);
      return null;
    }
  }

  async createUser(userData: Omit<User, 'id'>): Promise<User | null> {
    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const newUser: User = await response.json();
      return newUser;
    } catch (error) {
      console.error('Error creating user:', error);
      return null;
    }
  }
}

// Usage example
async function demonstrateFetch() {
  const userService = new UserService();

  // Fetch all users
  const allUsers = await userService.fetchUsers();
  console.log('All Users:', allUsers);

  // Fetch a specific user
  const specificUser = await userService.fetchUserById(1);
  console.log('Specific User:', specificUser);

  // Create a new user
  const newUserData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    username: 'johndoe'
  };

  const createdUser = await userService.createUser(newUserData);
  console.log('Created User:', createdUser);
}

demonstrateFetch();
