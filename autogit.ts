function calculateMean(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("The array must not be empty.");
    }

    const sum = numbers.reduce((accum, current) => accum + current, 0);
    const mean = sum / numbers.length;

    return mean;
}

// Example usage:
const numberList = [10, 20, 30, 40, 50];
const mean = calculateMean(numberList);
console.log(`The mean is: ${mean}`); // Output: The mean is: 30
