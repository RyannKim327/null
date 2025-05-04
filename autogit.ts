import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer: string) => {
  console.log(`Hello, ${answer}! Welcome to TypeScript.`);
  rl.close();
});
