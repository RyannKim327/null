// Define the shape of the data you expect from the API
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function fetchUsers(): Promise<User[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: User[] = await response.json();
  return data;
}

fetchUsers()
  .then(users => {
    users.forEach(user => {
      console.log(`${user.name} (${user.email})`);
    });
  })
  .catch(error => {
    console.error('Failed to fetch users:', error);
  });
