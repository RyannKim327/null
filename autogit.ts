function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

const userInput = prompt("What is your name? ");

if (userInput !== null) {
  greet(userInput.trim());
}
