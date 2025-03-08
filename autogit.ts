import * as readline from 'readline';

// Create an interface for input and output streams
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask a question and handle the response
function askQuestion(query: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            resolve(answer);
        });
    });
}

// Main function to run the program
async function main() {
    const name = await askQuestion("What is your name? ");
    console.log(`Hello, ${name}! Welcome to TypeScript.`);
    
    rl.close(); // Close the readline interface
}

// Run the main function
main();
