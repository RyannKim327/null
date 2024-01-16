// Prompt the user for input
var userInput = prompt("Enter a number:");

// Convert the user input to a number
var number = Number(userInput);

// Check if the number is divisible by 2
if (number % 2 === 0) {
  alert(number + " is even!");
} else {
  alert(number + " is odd!");
}
