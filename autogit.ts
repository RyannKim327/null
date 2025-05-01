interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function fetchUser(userId: number): Promise<void> {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const user: User = await response.json();
    console.log(`User's name is: ${user.name}`);
  } catch (error) {
    console.error('Failed to fetch user:', error);
  }
}

fetchUser(1);
