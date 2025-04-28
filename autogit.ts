function getRandomInt(min: number, max: number): number {
    // Ensure that min and max are integers
    min = Math.ceil(min);
    max = Math.floor(max);
    
    // Generate random integer between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
const randomNumber = getRandomInt(1, 10);
console.log(randomNumber);  // Outputs a random integer between 1 and 10
function getRandomFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

// Example usage:
const randomFloatNumber = getRandomFloat(1.5, 5.5);
console.log(randomFloatNumber);  // Outputs a random float between 1.5 and 5.5
