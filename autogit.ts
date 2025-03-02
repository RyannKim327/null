function getRandomNumberInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
const randomNum = getRandomNumberInRange(5, 10);
console.log(randomNum); // This will log a random number between 5 and 10 (inclusive).
function getRandomNumberInRangeExclusive(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
}
