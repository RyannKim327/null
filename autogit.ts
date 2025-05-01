// Define the shape of the data we expect from the API
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

// Fetch users from a public API
async function fetchUsers(): Promise<User[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }

  const users: User[] = await response.json();
  return users;
}

// Example usage
fetchUsers()
  .then(users => {
    users.forEach(user => {
      console.log(`${user.name} (${user.username}) - ${user.email}`);
    });
  })
  .catch(error => {
    console.error('Fetching users failed:', error);
  });
