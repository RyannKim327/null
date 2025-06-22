// Function to calculate the year of birth based on the current year and age
function calculateYearOfBirth(age: number): number {
  const currentYear = new Date().getFullYear();
  return currentYear - age;
}

// Main function to handle user input and output
function main(): void {
  // Simulating user input (in a real scenario, you'd use `prompt` in browser or `readline` in Node.js)
  const userInputName = "John Doe"; // Replace with actual input method
  const userInputAge = 25; // Replace with actual input method

  // Validate input
  if (!userInputName || isNaN(userInputAge) || userInputAge <= 0) {
    console.error("Invalid input. Please provide a valid name and age.");
    return;
  }

  // Process the input
  const yearOfBirth = calculateYearOfBirth(userInputAge);

  // Output the result
  console.log(`Hello, ${userInputName}!`);
  console.log(`You were born in the year ${yearOfBirth}.`);
}

// Run the program
main();
const userInputName = prompt("Enter your name:") || "";
const userInputAge = parseInt(prompt("Enter your age:") || "0", 10);
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your name: ", (name) => {
  rl.question("Enter your age: ", (ageInput) => {
    const age = parseInt(ageInput, 10);

    if (!name || isNaN(age) || age <= 0) {
      console.error("Invalid input. Please provide a valid name and age.");
      rl.close();
      return;
    }

    const yearOfBirth = calculateYearOfBirth(age);
    console.log(`Hello, ${name}!`);
    console.log(`You were born in the year ${yearOfBirth}.`);
    rl.close();
  });
});
