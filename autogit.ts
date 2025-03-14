function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage
const randomNum = getRandomNumber(1, 10); // Generates a random integer between 1 and 10
function getRandomFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

// Example usage
const randomFloat = getRandomFloat(0, 5); // Generates a random float between 0 and 5
function generateRandomInRange(min: number, max: number): number {
    const range = max - min;
    return Math.round(Math.random() * range) + min;
}

// Example usage
const randomNum = generateRandomInRange(5, 15);
function cryptoRandomInRange(min: number, max: number): number {
    const range = max - min;
    const randomBuffer = new Uint32Array(1);
    crypto.getRandomValues(randomBuffer);
    
    const randomNumber = randomBuffer[0] / (0xffffffff + 1);
    return Math.floor(randomNumber * (range + 1)) + min;
}

// Example usage
const secureRandomNum = cryptoRandomInRange(1, 100);
