// Get user input
let input = prompt("Enter a number:");

// Convert the input to a number
let number = parseFloat(input);

// Check if the input is a valid number
if (isNaN(number)) {
  console.log("Invalid input, please enter a number.");
} else {
  // Perform some operations on the number
  let squared = number * number;
  let cubed = number * number * number;
  let squareRoot = Math.sqrt(number);

  // Print the results
  console.log("Number:", number);
  console.log("Squared:", squared);
  console.log("Cubed:", cubed);
  console.log("Square Root:", squareRoot);
}
