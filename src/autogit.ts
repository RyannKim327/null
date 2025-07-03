/**
 * Generates a random number between min (inclusive) and max (exclusive).
 * @param min - The minimum number (inclusive).
 * @param max - The maximum number (exclusive).
 * @returns A random number between min and max.
 */
function getRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

// Example usage
const min = 1;
const max = 10;
const randomNum = getRandomNumber(min, max);
console.log(randomNum);
/**
 * Generates a random integer between min (inclusive) and max (exclusive).
 * @param min - The minimum number (inclusive).
 * @param max - The maximum number (exclusive).
 * @returns A random integer between min and max.
 */
function getRandomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Example usage
const minInt = 1;
const maxInt = 10;
const randomInt = getRandomInteger(minInt, maxInt);
console.log(randomInt);
