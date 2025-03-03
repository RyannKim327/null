import * as readline from 'readline';

// Create an interface for reading from standard input and writing to standard output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Function to ask a question and return a promise that resolves with the user's input
const askQuestion = (question: string): Promise<string> => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

// Main function to run the program
const main = async () => {
    // Ask for user's name
    const name = await askQuestion('What is your name? ');

    // Ask for user's age
    const age = await askQuestion('How old are you? ');

    // Display the greeting message
    console.log(`Hello, ${name}! You are ${age} years old.`);

    // Close the readline interface
    rl.close();
};

// Start the program
main().catch(console.error);
