interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function fetchUsers(): Promise<void> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const users: User[] = await response.json();
    users.forEach(user => {
      console.log(`${user.id}: ${user.username}`);
    });
  } catch (error) {
    console.error('Failed to fetch users:', error);
  }
}

fetchUsers();
