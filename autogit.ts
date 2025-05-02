import * as readline from 'readline';

// Create interface for reading input from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter a number: ', (answer) => {
  const num = Number(answer);

  if (isNaN(num)) {
    console.log('That is not a valid number!');
  } else {
    console.log(`The square of ${num} is ${num * num}.`);
  }

  rl.close();
});
