// Define an interface for the joke response
interface JokeResponse {
    setup?: string;
    delivery?: string;
    joke?: string;
}

// Function to fetch a random joke
async function fetchRandomJoke(): Promise<void> {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const jokeData: JokeResponse = await response.json();
        displayJoke(jokeData);
    } catch (error) {
        console.error('Error fetching the joke:', error);
    }
}

// Function to display the joke
function displayJoke(jokeData: JokeResponse): void {
    if (jokeData.setup) {
        console.log(`Setup: ${jokeData.setup}`);
        console.log(`Delivery: ${jokeData.delivery}`);
    } else if (jokeData.joke) {
        console.log(`Joke: ${jokeData.joke}`);
    } else {
        console.log('No joke found!');
    }
}

// Call the function to fetch a random joke
fetchRandomJoke();
