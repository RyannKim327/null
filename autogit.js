function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example:
var randomNumber = getRandomNumber(1, 10);
console.log(randomNumber); // Output will be a random number between 1 and 10 (inclusive)
