function getRandomNumberInRange(min: number, max: number): number {
    // Ensure that min is less than max
    if (min > max) {
        throw new Error("Min should be less than max");
    }

    // Generate a random number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
const min = 1;
const max = 10;
const randomNumber = getRandomNumberInRange(min, max);
console.log(randomNumber); // This will log a random number between 1 and 10
function getRandomFloatInRange(min: number, max: number): number {
    if (min > max) {
        throw new Error("Min should be less than max");
    }
    return Math.random() * (max - min) + min;
}

// Example usage:
const randomFloat = getRandomFloatInRange(1, 10);
console.log(randomFloat); // This will log a random float between 1 and 10
