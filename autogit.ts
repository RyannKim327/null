import * as readline from 'readline';

// Create an interface for input and output streams
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask a question and return a Promise
const askQuestion = (question: string): Promise<string> => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

// Main function to run the program
const main = async () => {
    const name: string = await askQuestion("What is your name? ");
    const age: string = await askQuestion("How old are you? ");

    console.log(`Hello, ${name}! You are ${age} years old.`);
    
    // Close the readline interface
    rl.close();
};

// Run the main function
main();
