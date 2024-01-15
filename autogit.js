const userInput = prompt("Enter a number:");  // Takes user input through a prompt dialog

// Converts the user input to a number
const number = parseFloat(userInput);

// Checks if the user input is valid
if (isNaN(number)) {
  console.log("Invalid input! Please enter a number.");
} else {
  // Performs a calculation (e.g., doubles the input number)
  const result = number * 2;

  // Displays the result
  console.log(`The result is: ${result}`);
}
