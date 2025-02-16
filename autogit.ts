// Import the 'readline' module to handle input from the command line
import * as readline from 'readline';

// Create an interface for the input stream
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to prompt user for their name
const askForName = () => {
    rl.question("What's your name? ", (name) => {
        console.log(`Hello, ${name}!`);
        rl.close();
    });
};

// Call the function to start the input process
askForName();
