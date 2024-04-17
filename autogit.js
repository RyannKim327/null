// Prompt the user to enter a number
let number = prompt("Enter a number:");

// Convert the input to a number
number = parseInt(number);

// Check if the number is even or odd
if (number % 2 === 0) {
    console.log(`${number} is even.`);
} else {
    console.log(`${number} is odd.`);
}
