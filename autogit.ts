function findMaxValue(arr: number[]): number | undefined {
    if (arr.length === 0) return undefined; // Return undefined if the array is empty
    return Math.max(...arr); // Use Math.max with the spread operator to find the max
}

// Example usage:
const numbers = [3, 5, 7, 2, 8];
const maxValue = findMaxValue(numbers);
console.log(maxValue); // Outputs: 8
