function getRandomNumberInRange(min: number, max: number): number {
    // Ensure the min and max are inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
const randomNum = getRandomNumberInRange(1, 10);
console.log(randomNum); // This will log a random number between 1 and 10 (inclusive)
