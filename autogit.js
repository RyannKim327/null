// Prompt the user for input
let num = prompt("Enter a number:");

// Convert input to a number
num = Number(num);

// Check if the input is a number
if (isNaN(num)) {
  console.log("Invalid input. Please enter a number.");
} else {
  // Perform a simple operation
  let result = num * 2;

  // Print the result
  console.log("The result is: " + result);
}
