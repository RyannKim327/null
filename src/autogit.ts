// Function to calculate the factorial of a number
function calculateFactorial(num: number): number {
    if (num < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Simulating user input (you can replace this with actual input mechanisms)
const userInput: string | null = prompt("Enter a number to calculate its factorial:");

if (userInput !== null) {
    const inputNumber: number = parseInt(userInput, 10);

    if (isNaN(inputNumber)) {
        console.log("Invalid input! Please enter a valid number.");
    } else {
        try {
            const factorialResult = calculateFactorial(inputNumber);
            console.log(`The factorial of ${inputNumber} is: ${factorialResult}`);
        } catch (error) {
            console.error(error.message);
        }
    }
} else {
    console.log("No input provided.");
}
