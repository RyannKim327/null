// Create a function that prompts the user for input
function getUserInput() {
  var userInput = prompt("Enter something:");
  return userInput;
}

// Call the function and store the user input in a variable
var input = getUserInput();

// Display the user input on the webpage
document.write("You entered: " + input);
