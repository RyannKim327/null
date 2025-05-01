interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function fetchUser(userId: number): Promise<User | null> {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
      console.error('Network response was not ok');
      return null;
    }
    const data: User = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}

fetchUser(1).then(user => {
  if (user) {
    console.log(`User name: ${user.name}, email: ${user.email}`);
  } else {
    console.log('User not found');
  }
});
