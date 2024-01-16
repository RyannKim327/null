// Prompt the user for input
var userInput = prompt("Please enter your name: ");

// Display a greeting message with the user's input
console.log("Hello, " + userInput + "!");

// Perform some calculations with the input
var inputLength = userInput.length;
var reversedInput = userInput.split("").reverse().join("");

// Display the calculated values
console.log("Length of your name: " + inputLength);
console.log("Reversed name: " + reversedInput);
