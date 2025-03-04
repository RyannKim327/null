interface User {
    id: number;
    name: string;
    email: string;
}

// Function to fetch users from the Android API
async function fetchUsers(apiUrl: string): Promise<User[]> {
    try {
        const response = await fetch(apiUrl);
        
        // Check if the response is OK (status in range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const users: User[] = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error; // Optionally rethrow for further handling
    }
}

// Usage of the function
const apiUrl = 'http://your-api-endpoint/users';  // Replace with your API endpoint

fetchUsers(apiUrl)
    .then(users => {
        console.log('Fetched users:', users);
    })
    .catch(error => {
        console.error('Failed to fetch users:', error);
    });
