// Prompt the user to enter a number
let userInput = prompt("Enter a number:");

// Convert the user input to a number
let number = parseInt(userInput);

// Check if the input is a number
if (!isNaN(number)) {
    console.log("You entered the number: " + number);
} else {
    console.log("Invalid input. Please enter a valid number.");
}
