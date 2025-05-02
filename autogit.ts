// Define an interface for the user data we expect from the API
interface User {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    email: string;
    phone: string;
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
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}

// Function to fetch random user data
async function fetchRandomUser(): Promise<void> {
    const apiUrl = "https://randomuser.me/api/";

    try {
        const response = await fetch(apiUrl);

        // Check if the response is ok (status 200)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const user: User = data.results[0];

        console.log("User Information:");
        console.log(`Name: ${user.name.title} ${user.name.first} ${user.name.last}`);
        console.log(`Gender: ${user.gender}`);
        console.log(`Email: ${user.email}`);
        console.log(`Phone: ${user.phone}`);
        console.log(`Location: ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country} ${user.location.postcode}`);
        console.log(`Picture: ${user.picture.large}`);
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

// Call the function to fetch and display random user
fetchRandomUser();
