// Function to generate a random number within a range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example: Generate a random number between 1 and 100
let randomNum = getRandomNumber(1, 100);
console.log(randomNum);
