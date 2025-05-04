function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
const min = 1;
const max = 10;
const randomNumber = getRandomNumber(min, max);
console.log(randomNumber);
