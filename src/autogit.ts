import * as readline from 'readline';

// Create an interface for input and output streams
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask a question and return a promise
function askQuestion(query: string): Promise<string> {
    return new Promise(resolve => rl.question(query, resolve));
}

// Main function to run the program
async function main() {
    try {
        // Ask for the user's name
        const name = await askQuestion("What is your name? ");
        
        // Ask for the user's age
        const ageInput = await askQuestion("What is your age? ");
        const age = parseInt(ageInput, 10);

        // Calculate years until 100
        const yearsUntil100 = 100 - age;

        // Output the result
        console.log(`Hello, ${name}! You will turn 100 in ${yearsUntil100} years.`);

    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        // Close the readline interface
        rl.close();
    }
}

// Run the main function
main();
