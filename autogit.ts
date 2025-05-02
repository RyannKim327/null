import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(question: string): Promise<string> {
  return new Promise(resolve => rl.question(question, answer => resolve(answer)));
}

async function main() {
  const name = await askQuestion('What is your name? ');
  const ageStr = await askQuestion('How old are you? ');
  const age = parseInt(ageStr);

  if (isNaN(age)) {
    console.log("That's not a valid age!");
  } else {
    console.log(`Hello ${name}, in 5 years you'll be ${age + 5} years old!`);
  }
  rl.close();
}

main();
