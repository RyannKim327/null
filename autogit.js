// Function to read input from the user
function getInput(message) {
  return prompt(message);
}

// Read two numbers from the user
let num1 = parseFloat(getInput("Enter the first number:"));
let num2 = parseFloat(getInput("Enter the second number:"));

// Perform a calculation (addition in this case)
let sum = num1 + num2;

// Display the result
console.log("The sum of", num1, "and", num2, "is", sum);
