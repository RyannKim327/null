import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter your name: ', (name: string) => {
    console.log(`Hello, ${name}!`);
    rl.close();
});
npm install -g typescript
