function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const minRange = 1;
const maxRange = 100;
const randomNumber = getRandomNumber(minRange, maxRange);

console.log(randomNumber);
