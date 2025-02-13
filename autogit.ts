// Importing the 'readline' module to handle input/output
import * as readline from 'readline';

// Creating an interface for input/output
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

// Main function to execute the program
async function main() {
    try {
        // Asking for user's name
        const name = await askQuestion("What is your name? ");
        
        // Asking for user's age
        const ageInput = await askQuestion("What is your age? ");
        const age = parseInt(ageInput, 10);

        // Checking if age is a valid number
        if (isNaN(age)) {
            console.log("Please enter a valid number for age.");
        } else {
            // Outputting the result
            console.log(`Hello, ${name}! You are ${age} years old.`);
        }
    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        // Closing the readline interface
        rl.close();
    }
}

// Run the main function
main();
What is your name? Alice
What is your age? 25
Hello, Alice! You are 25 years old.
