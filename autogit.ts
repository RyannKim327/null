// Define the shape of the expected data
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function fetchUserData(userId: number): Promise<void> {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching user: ${response.status} ${response.statusText}`);
    }

    const userData: User = await response.json();

    console.log(`Fetched User: ${userData.name} (${userData.email})`);
  } catch (error) {
    console.error('Oops, something went wrong:', error);
  }
}

// Call the function with a user ID
fetchUserData(3);
