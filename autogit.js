// Prompt the user for input
var num1 = prompt("Enter the first number: "); // Input for the first number
var num2 = prompt("Enter the second number: "); // Input for the second number

// Convert the user input to numbers
num1 = parseFloat(num1);
num2 = parseFloat(num2);

// Perform a simple calculation
var sum = num1 + num2;
var product = num1 * num2;

// Display the result
console.log("The sum of " + num1 + " and " + num2 + " is: " + sum);
console.log("The product of " + num1 + " and " + num2 + " is: " + product);
