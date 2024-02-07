// Prompt the user for input
var input = prompt("Enter a number:");

// Convert the input to a number
var number = parseFloat(input);

// Check if the input is a valid number
if (!isNaN(number)) {
  // Print the square of the number
  var square = number * number;
  console.log("The square of " + number + " is " + square);
} else {
  console.log("Invalid input. Please enter a number.");
}
