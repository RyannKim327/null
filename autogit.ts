// Import the necessary module
import * as readline from 'readline';

// Create an interface for reading from stdin and writing to stdout
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask for user input
function askForName() {
    rl.question('Please enter your name: ', (name: string) => {
        console.log(`Hello, ${name}! Nice to meet you.`);
        // Close the readline interface
        rl.close();
    });
}

// Start the program by asking for the user's name
askForName();
