interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function fetchUsers(): Promise<User[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.statusText}`);
  }

  const users: User[] = await response.json();
  return users;
}

async function main() {
  try {
    const users = await fetchUsers();
    users.forEach(user => {
      console.log(`User ${user.id}: ${user.name} (${user.email})`);
    });
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

main();
