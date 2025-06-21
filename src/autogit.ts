// Define an interface for the structure of the user object
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

// Function to fetch users from the API
async function fetchUsers(): Promise<User[]> {
  const url = "https://jsonplaceholder.typicode.com/users";

  try {
    // Fetch data from the API
    const response = await fetch(url);

    // Check if the response status is OK (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON and return it
    const users: User[] = await response.json();
    return users;
  } catch (error) {
    // Handle any errors that occur during the fetch
    console.error("Error fetching users:", error);
    return [];
  }
}

// Example usage of the fetchUsers function
async function displayUsers() {
  const users = await fetchUsers();

  if (users.length > 0) {
    console.log("List of Users:");
    users.forEach((user) => {
      console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
    });
  } else {
    console.log("No users found or an error occurred.");
  }
}

// Call the displayUsers function
displayUsers();
