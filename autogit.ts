import * as readline from 'readline';

// Create an interface for reading input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to prompt the user for their name and age
function askUserDetails() {
  rl.question("What is your name? ", (name) => {
    rl.question("How old are you? ", (age) => {
      const ageNumber = parseInt(age);

      if (isNaN(ageNumber)) {
        console.log("Please enter a valid age.");
      } else {
        console.log(`Hello, ${name}! You are ${ageNumber} years old.`);
      }

      // Close the readline interface
      rl.close();
    });
  });
}

// Invoke the function to start the prompt
askUserDetails();
