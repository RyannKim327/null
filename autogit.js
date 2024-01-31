var min = parseInt(prompt("Enter the minimum number:"));
var max = parseInt(prompt("Enter the maximum number:"));

if (isNaN(min) || isNaN(max)) {
  console.log("Invalid input. Please enter valid numbers.");
} else {
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log("Random number between " + min + " and " + max + " is: " + randomNumber);
}
