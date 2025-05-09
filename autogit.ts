npm install axios
npm install --save-dev typescript @types/node
import axios from 'axios';

// Define an interface for the user data structure
interface User {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    email: string;
    phone: string;
    picture: {
        large: string;
    };
}

// Define a function that fetches random user data
async function fetchRandomUser(): Promise<void> {
    try {
        const response = await axios.get<{ results: User[] }>('https://randomuser.me/api/');
        const user = response.data.results[0]; // Get the first user from the results

        console.log('Random User Data:');
        console.log(`Name: ${user.name.title} ${user.name.first} ${user.name.last}`);
        console.log(`Gender: ${user.gender}`);
        console.log(`Email: ${user.email}`);
        console.log(`Phone: ${user.phone}`);
        console.log(`Picture URL: ${user.picture.large}`);
    } catch (error) {
        console.error('Error fetching random user:', error);
    }
}

// Call the function to fetch a random user
fetchRandomUser();
npx tsc fetchRandomUser.ts
node fetchRandomUser.js
