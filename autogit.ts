import * as readline from 'readline';

// Create an interface for input and output streams
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate the square of a number
const calculateSquare = (num: number): number => {
    return num * num;
}

// Asking user for input
rl.question('Please enter a number: ', (input: string) => {
    const numberInput = parseFloat(input);

    if (isNaN(numberInput)) {
        console.log("You didn't enter a valid number. Please try again.");
    } else {
        const square = calculateSquare(numberInput);
        console.log(`The square of ${numberInput} is ${square}.`);
    }

    // Close the readline interface
    rl.close();
});
Please enter a number: 5
The square of 5 is 25.
