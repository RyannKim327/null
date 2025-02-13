// Define an interface for the data you expect to receive
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

// Function to fetch user data
async function fetchUserData(userId: number): Promise<void> {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        
        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        
        const user: User = await response.json();
        console.log(`User Details: 
        Name: ${user.name}
        Username: ${user.username}
        Email: ${user.email}`);
        
    } catch (error) {
        console.error(error);
    }
}

// Call the function to fetch user data for user with ID 1
fetchUserData(1);
