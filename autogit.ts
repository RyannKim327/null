function findMaxValue(arr: number[]): number | null {
    // Check if the array is empty
    if (arr.length === 0) {
        return null; // or throw an error depending on your use case
    }
    return Math.max(...arr);
}

// Example usage
const numbers = [5, 3, 9, 1, 6];
const maxValue = findMaxValue(numbers);
console.log(maxValue); // Output: 9
