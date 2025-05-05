import promptSync from 'prompt-sync';

const prompt = promptSync();

const userInput: string = prompt('Enter a string to reverse: ');
const reversed = userInput.split('').reverse().join('');

console.log(`Reversed string: ${reversed}`);
