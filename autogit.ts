// Define the User type according to the expected structure of the data
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

// Function to fetch users from a public API
async function fetchUsers(): Promise<void> {
    const url = 'https://jsonplaceholder.typicode.com/users';

    try {
        // Use fetch to get the data
        const response = await fetch(url);

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON data
        const users: User[] = await response.json();

        // Log user names to the console
        users.forEach(user => {
            console.log(`User: ${user.name}, Username: ${user.username}, Email: ${user.email}`);
        });
    } catch (error) {
        // Handle errors (e.g., network issues, parsing issues)
        console.error('Error fetching users:', error);
    }
}

// Call the function to fetch users
fetchUsers();
