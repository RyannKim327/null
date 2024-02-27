function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example: generate a random number between 1 and 10
let randomNumber = getRandomNumber(1, 10);
console.log(randomNumber);
