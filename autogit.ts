// Define an interface for the joke response structure
interface Joke {
    id: number;
    type: string;
    setup: string;
    punchline: string;
}

// Function to fetch a random joke
async function fetchRandomJoke(): Promise<void> {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        
        // Check if the response is okay (status code 200)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const joke: Joke = await response.json();
        
        // Log the joke
        console.log(`${joke.setup} - ${joke.punchline}`);
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
}

// Call the function to fetch a joke
fetchRandomJoke();
