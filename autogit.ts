import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter a number to check if it is prime: ', (answer) => {
  const num = Number(answer);
  if (isNaN(num) || !Number.isInteger(num) || num < 2) {
    console.log('Please enter a valid integer greater than 1.');
  } else {
    console.log(`${num} is ${isPrime(num) ? '' : 'not '}a prime number.`);
  }
  rl.close();
});

function isPrime(n: number): boolean {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
