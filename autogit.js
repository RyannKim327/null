// Generate a random number in a given range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example: Generate a random number between 1 and 10
const randomNumber = getRandomNumber(1, 10);
console.log(randomNumber);
