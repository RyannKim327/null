function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example: Generate a random number between 1 and 100
console.log(getRandomNumber(1, 100));
