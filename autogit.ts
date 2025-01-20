interface User {
  id: number;
  name: string;
  email: string;
}

async function getUser(id: number): Promise<User | null> {
  try {
    const response = await fetch(`https://api.example.com/users/${id}`);
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error(`Error fetching user: ${error}`);
    return null;
  }
}

async function main() {
  const userId = 42;
  const user = await getUser(userId);
  if (user) {
    console.log(`User ${user.name} has email ${user.email}`);
  } else {
    console.log(`User not found`);
  }
}

main();
{
  "id": 42,
  "name": "John Doe",
  "email": "johndoe@example.com"
}
