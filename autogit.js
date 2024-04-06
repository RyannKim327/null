function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Specify the range
var min = 1;
var max = 100;

// Generate a random number between min and max
var randomNumber = getRandomNumber(min, max);

console.log(randomNumber);
