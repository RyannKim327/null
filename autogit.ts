function getRandomNumberInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
const randomNumber = getRandomNumberInRange(1, 100);
console.log(randomNumber); // This will log a random number between 1 and 100, inclusive.
function getRandomFloatInRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

// Example usage:
const randomFloat = getRandomFloatInRange(1.5, 5.5);
console.log(randomFloat); // This will log a random floating-point number between 1.5 and 5.5.
