function getRandomIntInRange(min: number, max: number): number {
    min = Math.ceil(min); // Ensure min is an integer
    max = Math.floor(max); // Ensure max is an integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomInt = getRandomIntInRange(5, 15);
console.log(randomInt); // Outputs a random integer between 5 and 15 (inclusive)
function getRandomFloatInRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}
const randomFloat = getRandomFloatInRange(2.5, 7.5);
console.log(randomFloat); // Outputs a random float between 2.5 (inclusive) and 7.5 (exclusive)
function getRandomIntInRangeSafe(min: number, max: number): number {
    if (min > max) {
        throw new Error("min must be less than or equal to max");
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
type Range = { min: number; max: number };

function getRandomNumberInRange(range: Range, isInteger: boolean = true): number {
    const { min, max } = range;
    if (min > max) {
        throw new Error("min must be less than or equal to max");
    }

    if (isInteger) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        return Math.random() * (max - min) + min;
    }
}
const range: Range = { min: 10, max: 20 };
console.log(getRandomNumberInRange(range)); // Random integer between 10 and 20
console.log(getRandomNumberInRange(range, false)); // Random float between 10 and 20
function getRandomIntInRange(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloatInRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}
