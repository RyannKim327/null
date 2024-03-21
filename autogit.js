function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Usage example
let min = 1;
let max = 100;
let randomNumber = getRandomNumber(min, max);
console.log(randomNumber);
