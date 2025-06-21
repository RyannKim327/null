function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min); // Ensure min is an integer
    max = Math.floor(max); // Ensure max is an integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumber = getRandomInt(10, 20);
console.log(randomNumber); // Outputs a random integer between 10 and 20 (inclusive)
function getRandomFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}
const randomFloat = getRandomFloat(5.5, 10.2);
console.log(randomFloat); // Outputs a random float between 5.5 and 10.2
function getRandomInt(min: number, max: number): number {
    if (min > max) {
        throw new Error("Invalid range: min must be <= max");
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
