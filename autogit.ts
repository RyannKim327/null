import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What’s your name? ', (name) => {
  console.log(`Hello, ${name}! Welcome to TypeScript.`);
  rl.question('How old are you? ', (age) => {
    const ageNum = Number(age);
    if (isNaN(ageNum)) {
      console.log('That doesn’t look like a valid number.');
    } else {
      console.log(`Great! You’re ${ageNum} years old.`);
    }
    rl.close();
  });
});
