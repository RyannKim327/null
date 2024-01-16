let userInput = prompt("Enter a number:");
let maxNumber = parseInt(userInput);

if (isNaN(maxNumber)) {
  console.log("Invalid input. Please enter a number.");
} else {
  let randomNumber = Math.floor(Math.random() * maxNumber) + 1;
  console.log("Random number:", randomNumber);
}
