import * as readline from 'readline';

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask for user input
const askQuestion = (question: string): Promise<string> => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

// Main function to run the program
const main = async () => {
    const name = await askQuestion('What is your name? ');
    console.log(`Hello, ${name}!`);
    
    rl.close();
};

// Run the main function
main();
