// Prompt user for input
let userInput = prompt("Enter a number:");

// Convert input to a number
let number = parseInt(userInput);

// Check if the input is a number
if (!isNaN(number)) {
    console.log("The square of the number is: " + (number * number));
} else {
    console.log("Invalid input. Please enter a valid number.");
}
