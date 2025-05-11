type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

async function fetchUsers(): Promise<void> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`Network error: ${response.status}`);
    }
    const users: User[] = await response.json();
    users.forEach(user => {
      console.log(`User: ${user.name} (username: ${user.username})`);
    });
  } catch (error) {
    console.error('Fetch failed:', error);
  }
}

fetchUsers();
