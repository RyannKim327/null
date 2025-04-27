function getRandomInt(min: number, max: number): number {
    // Ensure min is inclusive and max is exclusive
    return Math.floor(Math.random() * (max - min)) + min;
}
const randomNumber = getRandomInt(1, 10);
console.log(randomNumber); // This will log a number between 1 and 9
function getRandomFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}
const randomFloatNumber = getRandomFloat(1.5, 5.5);
console.log(randomFloatNumber); // Logs a floating-point number between 1.5 and 5.5
