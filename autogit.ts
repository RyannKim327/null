// Define an interface for the data structure we expect to receive
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

async function fetchUsers() {
    try {
        // Fetch data from a public API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        // Parse the JSON data
        const users: User[] = await response.json();
        
        // Log the users to the console
        console.log('Fetched Users:', users);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

// Call the function to execute it
fetchUsers();
