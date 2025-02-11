// A TypeScript function to fetch user data from a placeholder API
async function fetchUserData(userId: number): Promise<void> {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    
    try {
        // Making a GET request to fetch user data
        const response = await fetch(url);

        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON response
        const userData = await response.json();
        console.log('User Data:', userData);  // Logging the user data
    } catch (error) {
        // Handle errors here
        console.error('Error fetching user data:', error);
    }
}

// Call the function to fetch data for user with ID 1
fetchUserData(1);
npm install node-fetch
import fetch from 'node-fetch';
