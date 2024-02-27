// Generates a random number within a specific range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Usage example: Generate a random number between 1 and 100
let randomNumber = getRandomNumber(1, 100);
console.log(randomNumber);
