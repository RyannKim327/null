function getRandomInt(min: number, max: number): number {
    // Ensure min and max are integers
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // Inclusive min and max
}

// Example usage:
const randomNumber = getRandomInt(1, 10);
console.log(randomNumber); // Outputs a random integer between 1 and 10
function getRandomFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min; // min inclusive, max exclusive
}

// Example usage:
const randomFloat = getRandomFloat(1, 10);
console.log(randomFloat); // Outputs a random floating-point number between 1 (inclusive) and 10 (exclusive)
