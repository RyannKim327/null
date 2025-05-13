interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function getUsers(): Promise<User[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const users: User[] = await response.json();
  return users;
}

(async () => {
  try {
    const users = await getUsers();
    users.forEach(user => {
      console.log(`${user.name} (${user.username}) - ${user.email}`);
    });
  } catch (error) {
    console.error('Failed to fetch users:', error);
  }
})();
