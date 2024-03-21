// Function to generate random number in a specific range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Specify the range
const minRange = 1;
const maxRange = 100;

// Generate a random number between minRange and maxRange
const randomNumber = getRandomNumber(minRange, maxRange);

console.log(randomNumber); // Output the random number
