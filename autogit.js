// Prompt the user for input
var userInput = prompt("Enter a number:");

// Convert the user input to a number
var number = parseInt(userInput);

// Check if the input is a valid number
if (isNaN(number)) {
  console.log("Invalid input! Please enter a valid number.");
} else {
  // Perform some calculations with the number
  var square = number * number;
  var cube = number * number * number;

  // Display the results
  console.log("Number: " + number);
  console.log("Square: " + square);
  console.log("Cube: " + cube);
}
