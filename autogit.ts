function getRandomInt(min: number, max: number): number {
    // Ensure the minimum and maximum values are inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
const randomNum = getRandomInt(1, 10);
console.log(randomNum); // This will log a random integer between 1 and 10 (inclusive)
function getRandomFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

// Example usage:
const randomFloat = getRandomFloat(1, 10);
console.log(randomFloat); // This will log a random float between 1 and 10
