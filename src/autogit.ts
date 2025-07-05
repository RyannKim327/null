npm install -g typescript
// Import the 'readline' module to handle input from the command line
import * as readline from 'readline';

// Create an interface for input and output streams
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask for the user's name
function askForName(): void {
    rl.question('What is your name? ', (name: string) => {
        greetUser(name);
    });
}

// Function to greet the user
function greetUser(name: string): void {
    console.log(`Hello, ${name}! Welcome to TypeScript.`);
    rl.close(); // Close the readline interface
}

// Start the program by asking for the user's name
askForName();
