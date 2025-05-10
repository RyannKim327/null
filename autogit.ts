import * as readline from 'readline';

// Create interface for reading lines from input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to ask a question and return a promise with the answer
function askQuestion(query: string): Promise<string> {
  return new Promise(resolve => {
    rl.question(query, answer => {
      resolve(answer);
    });
  });
}

async function main() {
  const name = await askQuestion("What's your name? ");
  const ageInput = await askQuestion("How old are you? ");

  // Convert ageInput to a number
  const age = Number(ageInput);

  if (isNaN(age)) {
    console.log("That doesn't look like a valid age.");
  } else {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  }

  rl.close();
}

main();
