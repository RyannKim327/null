// Define an interface for the user data we expect
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

// Function to fetch users from a public API and log them
async function fetchUsers(): Promise<void> {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    try {
        // Make a fetch request
        const response = await fetch(apiUrl);

        // Check if the response was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON response
        const users: User[] = await response.json();

        // Log the user data to the console
        console.log(users);
    } catch (error) {
        // Handle errors
        console.error('Error fetching users:', error);
    }
}

// Call the fetchUsers function
fetchUsers();
