import * as readline from 'readline';

// Create an interface for input and output streams
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask a question and wait for the user's answer
function askQuestion(query: string): Promise<string> {
    return new Promise(resolve => rl.question(query, resolve));
}

// Main function to execute the program
async function main() {
    try {
        // Ask for the first number
        const firstNumStr = await askQuestion('Enter the first number: ');
        const firstNum = parseFloat(firstNumStr);

        // Ask for the second number
        const secondNumStr = await askQuestion('Enter the second number: ');
        const secondNum = parseFloat(secondNumStr);

        // Calculate the sum
        const sum = firstNum + secondNum;

        // Output the result
        console.log(`The sum of ${firstNum} and ${secondNum} is ${sum}`);

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        // Close the readline interface
        rl.close();
    }
}

// Start the program
main();
