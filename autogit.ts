import * as readline from 'readline';

// Create an interface for input and output streams
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask for user input
const askForName = (): void => {
    rl.question('What is your name? ', (name: string) => {
        console.log(`Hello, ${name}! Welcome to the TypeScript world!`);
        rl.close(); // Close the readline interface
    });
};

// Call the function to start the input process
askForName();
