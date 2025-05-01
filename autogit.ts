mkdir ts-api-example
cd ts-api-example
npm init -y
npm install typescript ts-node @types/node --save-dev
npx tsc --init
// index.ts

// Define a User interface to type the data we expect from the API
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

// Function to fetch users from the JSONPlaceholder API
async function fetchUsers(): Promise<User[]> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const users: User[] = await response.json();
    return users;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return [];
  }
}

// Function to display the users in the console
async function displayUsers(): Promise<void> {
  const users = await fetchUsers();
  if (users.length > 0) {
    users.forEach(user => {
      console.log(`ID: ${user.id}, Name: ${user.name}, Username: ${user.username}, Email: ${user.email}`);
    });
  } else {
    console.log('No users found');
  }
}

// Execute the displayUsers function
displayUsers();
npx ts-node index.ts
