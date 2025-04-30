import * as readline from 'readline';

// Create an interface for reading input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask a question and return a promise
function askQuestion(question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

// Main function to run the program
async function main() {
    const name = await askQuestion("What is your name? ");
    const age = await askQuestion("What is your age? ");

    console.log(`Hello, ${name}! You are ${age} years old.`);
    
    // Close the readline interface
    rl.close();
}

// Run the main function
main()
    .then(() => {
        console.log("Program has finished.");
    })
    .catch(error => {
        console.error("An error occurred:", error);
        rl.close();
    });
tsc inputExample.ts
node inputExample.js
