// Define an interface for the user data we expect from the API
interface User {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    location: {
        street: {
            number: number;
            name: string;
        };
        city: string;
        state: string;
        country: string;
        postcode: string;
    };
    email: string;
    phone: string;
    dob: {
        date: string;
        age: number;
    };
    picture: {
        large: string;
    };
}

// Define a function that fetches data from the API
async function fetchRandomUser(): Promise<void> {
    try {
        const response = await fetch('https://randomuser.me/api/');
        
        // Check if the response is OK (status 200-299)
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        const user: User = data.results[0]; // Get the first user from the results

        // Log the user details to the console
        console.log('Random User Details:');
        console.log(`Name: ${user.name.title} ${user.name.first} ${user.name.last}`);
        console.log(`Gender: ${user.gender}`);
        console.log(`Email: ${user.email}`);
        console.log(`Phone: ${user.phone}`);
        console.log(`Location: ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`);
        console.log(`Date of Birth: ${user.dob.date} (Age: ${user.dob.age})`);
        console.log(`Picture: ${user.picture.large}`);
    } catch (error) {
        console.error('Failed to fetch random user:', error);
    }
}

// Call the fetchRandomUser function
fetchRandomUser();
