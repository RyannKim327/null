// Prompt the user for input
var userInput = prompt("Enter a number: ");

// Convert the user input to a number
var number = parseInt(userInput);

// Check if the number is even or odd
if (number % 2 === 0) {
  console.log(number + " is an even number.");
} else {
  console.log(number + " is an odd number.");
}
