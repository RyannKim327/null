function getRandomNumber(min: number, max: number): number {
    // Ensure the min is inclusive and max is exclusive
    return Math.floor(Math.random() * (max - min)) + min;
}

// Example usage
const randomNumber = getRandomNumber(1, 10);
console.log(randomNumber); // This will log a random number between 1 and 9 (inclusive of 1, exclusive of 10)
function getRandomNumberInclusive(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage
const randomNumberInclusive = getRandomNumberInclusive(1, 10);
console.log(randomNumberInclusive); // This will log a random number between 1 and 10 (inclusive)
