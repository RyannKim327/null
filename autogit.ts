function calculateMean(numbers: number[]): number {
    if (numbers.length === 0) return 0; // Handle empty array case
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / numbers.length;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const mean = calculateMean(numbers);
console.log(mean); // Output: 3
