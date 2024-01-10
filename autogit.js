// Prompt the user to enter their name
let name = prompt("Enter your name:");

// Display a greeting message with the user's name
console.log("Hello, " + name + "!");

// Prompt the user to enter their age
let age = parseInt(prompt("Enter your age:"));

// Display a message based on the user's age
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
