function findMaxValue(arr: number[]): number | null {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }
    return Math.max(...arr);
}

// Example usage:
const numbers = [1, 5, 3, 9, 2];
const maxValue = findMaxValue(numbers);
console.log(maxValue); // Output: 9
