// Prompt the user to enter a name
var name = prompt("Enter your name:");

// Display a greeting message
console.log("Hello, " + name + "!");

// Prompt the user to enter their age
var age = prompt("Enter your age:");

// Convert the age to a number
age = parseInt(age);

// Check if the user is an adult (age above 18)
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}
