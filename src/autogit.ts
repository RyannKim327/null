function findMaxValue(arr: number[]): number | null {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }
    return Math.max(...arr); // Use Math.max with the spread operator
}

// Example usage:
const numbers = [3, 5, 7, 2, 8, -1];
const maxValue = findMaxValue(numbers);
console.log(maxValue); // Output: 8
