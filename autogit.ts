function getRandomNumber(min: number, max: number): number {
    // Ensure min is inclusive and max is exclusive
    return Math.floor(Math.random() * (max - min)) + min;
}

// Example usage
const randomNumber = getRandomNumber(1, 10); // Generates a random number between 1 and 9
console.log(randomNumber);
function getRandomNumberInclusive(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage
const randomNumberInclusive = getRandomNumberInclusive(1, 10); // Generates a random number between 1 and 10
console.log(randomNumberInclusive);
