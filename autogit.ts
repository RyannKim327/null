import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter something: ', (input) => {
    console.log(`You entered: ${input}`);
    rl.close();
});
