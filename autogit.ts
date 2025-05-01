function getRandomNumberInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
const randomNum = getRandomNumberInRange(1, 10);
console.log(randomNum); // Outputs a random number between 1 and 10 (inclusive)
function getRandomNumberInRangeExclusive(max: number): number {
    return Math.floor(Math.random() * max);
}

// Example usage:
const randomNumExclusive = getRandomNumberInRangeExclusive(10);
console.log(randomNumExclusive); // Outputs a random number between 0 and 9 (inclusive)
