const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a value: ', (answer) => {
  console.log('You entered:', answer);

  rl.close();
});
