// Taking user input from the console
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompting the user for input
readline.question('Enter your name: ', (name) => {
  console.log(`Hello, ${name}!`);
  readline.close();
});
