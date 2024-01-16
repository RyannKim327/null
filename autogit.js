// Prompting the user for input
let userInput = prompt("Please enter a number:");

// Checking if the user input is valid
if (userInput !== null) {
  // Converting the user input to a number
  let number = parseFloat(userInput);

  // Checking if the user input is a valid number
  if (!isNaN(number)) {
    // Performing some manipulation on the number (e.g., multiplying by 2)
    let result = number * 2;

    // Outputting the result
    console.log("Result: " + result);
  } else {
    console.log("Invalid input. Please enter a valid number.");
  }
} else {
  console.log("No input provided.");
}
