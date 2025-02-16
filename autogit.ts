// Import the required modules
import * as readline from 'readline';

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to ask for user input
const askForName = () => {
  rl.question('Please enter your name: ', (name: string) => {
    console.log(`Hello, ${name}! Welcome to TypeScript!`);
    rl.close(); // Close the readline interface
  });
};

// Call the function to start the input process
askForName();
