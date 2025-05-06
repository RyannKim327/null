import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name: string) => {
  console.log(`Hello, ${name}! Welcome to TypeScript.`);
  rl.close();
});
