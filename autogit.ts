function findMaxValue(array: number[]): number {
    return Math.max(...array);
}

// Example usage:
const numbers = [10, 20, 5, 30, 15];
const maxValue = findMaxValue(numbers);
console.log(maxValue); // Output: 30
