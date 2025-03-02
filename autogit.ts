// Assuming you have a tsconfig.json file set up

// Importing fetch, you might not need this if you're in a browser environment where it's available by default.
// Uncomment the next line if you're using Node.js with a fetch package such as node-fetch or undici.
// import fetch from 'node-fetch';

// Function to fetch a random joke
async function fetchRandomJoke(): Promise<void> {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/jokes/random');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jokeData = await response.json();
        console.log(`Here's a random joke: ${jokeData.setup} - ${jokeData.punchline}`);
    } catch (error) {
        console.error('Error fetching the joke:', error);
    }
}

// Call the function
fetchRandomJoke();
