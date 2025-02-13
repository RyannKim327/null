function findMaxValue(arr: number[]): number | null {
    if (arr.length === 0) {
        return null; // Return null for empty arrays
    }
    return Math.max(...arr);
}

// Example usage:
const numbers = [3, 5, 7, 2, 8];
const maxValue = findMaxValue(numbers);
console.log(maxValue); // Output: 8
