import * as readline from 'readline';

// Create an interface for input and output streams
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask a question and handle the response
function askQuestion(query: string): Promise<string> {
    return new Promise(resolve => rl.question(query, resolve));
}

// Main function to run the program
async function main() {
    const name = await askQuestion("What is your name? ");
    console.log(`Hello, ${name}!`);

    const age = await askQuestion("How old are you? ");
    console.log(`You are ${age} years old.`);

    rl.close();
}

// Run the main function
main().catch(err => console.error(err));
