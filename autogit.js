// Prompt the user to enter a name
var name = prompt("Please enter your name:");

// Display a greeting with the entered name
console.log("Hello, " + name + "!");

// Prompt the user to enter their age
var age = prompt("Please enter your age:");

// Calculate the year of birth based on the entered age
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;

// Display the calculated year of birth
console.log("You were born in " + birthYear + ".");
