function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Using the function to generate a random number between 1 and 100
const randomNum = getRandomNumber(1, 100);
console.log(randomNum);
