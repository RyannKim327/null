type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

async function fetchUser(userId: number): Promise<User> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch user with ID ${userId}: ${response.statusText}`);
  }

  const user: User = await response.json();
  return user;
}

fetchUser(1)
  .then(user => console.log(user))
  .catch(error => console.error(error));
