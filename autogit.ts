import * as readline from 'readline';

// Create interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for user input
rl.question('What is your name? ', (name: string) => {
  console.log(`Hello, ${name}! Welcome to TypeScript.`);
  rl.close();
});
