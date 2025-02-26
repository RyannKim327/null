function calculateMean(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("The array should not be empty.");
    }
    
    const totalSum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const mean = totalSum / numbers.length;

    return mean;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const mean = calculateMean(numbers);
console.log(`The mean is: ${mean}`); // Output: The mean is: 3
