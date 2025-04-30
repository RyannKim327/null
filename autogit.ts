// Define an interface for the user data
interface User {
    id: number;
    name: string;
    email: string;
}

async function fetchUsers(): Promise<void> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    
    try {
        const response = await fetch(url);

        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const users: User[] = await response.json();
        console.log('Fetched Users:', users);

        // Display user names and emails
        users.forEach(user => {
            console.log(`Name: ${user.name}, Email: ${user.email}`);
        });

    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

// Call the fetchUsers function to execute the fetch
fetchUsers();
