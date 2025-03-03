npm install -g typescript
// Import the 'readline' module to handle input from the console
import * as readline from 'readline';

// Create an interface for input and output streams
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Function to ask the user for their name and greet them
function askForName() {
    rl.question('Please enter your name: ', (name: string) => {
        console.log(`Hello, ${name}!`);
        rl.close(); // Close the interface
    });
}

// Call the function to start the process
askForName();
tsc greet.ts
node greet.js
