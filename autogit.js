function calculateMean(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
    const mean = sum / numbers.length;

    return mean;
}
const numbers = [1, 2, 3, 4, 5];
const mean = calculateMean(numbers);

console.log(mean); // Output: 3
