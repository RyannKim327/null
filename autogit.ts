function getRandomNumber(min: number, max: number): number {
    const random = Math.random() * (max - min) + min;
    return Math.floor(random);
}

// Example usage:
const randomNum = getRandomNumber(1, 100);
console.log(randomNum);
