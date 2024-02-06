// Prompt user for input
const userInput = prompt("Enter your name:");

// Display the input
console.log("Hello, " + userInput + "!");

// Example of using the input in a function
function greetUser(name) {
  console.log("Welcome, " + name + "!");
}

// Call the function with the user input
greetUser(userInput);
