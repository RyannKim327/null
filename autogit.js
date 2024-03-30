function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage: Generate a random number between 1 and 100
let randomNumber = getRandomNumber(1, 100);
console.log(randomNumber);
