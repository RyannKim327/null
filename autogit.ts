import * as readline from 'readline';

// Create an interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask questions
function askQuestion(query: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            resolve(answer);
        });
    });
}

// Main function to run the program
async function main() {
    try {
        const name = await askQuestion('What is your name? ');
        const age = await askQuestion('How old are you? ');

        // Process input and produce output
        console.log(`Hello, ${name}! You are ${age} years old.`);

    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        rl.close();
    }
}

// Run the program
main();
# Initialize a new npm project (if you haven't already)
npm init -y

# Install TypeScript
npm install typescript --save-dev

# Create a tsconfig.json file (optional but recommended)
npx tsc --init

# Compile TypeScript to JavaScript
npx tsc app.ts

# Run the resulting JavaScript file
node app.js
