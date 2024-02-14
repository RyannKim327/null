// Prompt the user for input
const userInput = prompt('Enter your name:');

// Log the user input to the console
console.log(`Hello, ${userInput}!`);

// Use the user input in a function
function greetUser(name) {
  alert(`Welcome, ${name}!`);
}

// Call the function with the user input
greetUser(userInput);
