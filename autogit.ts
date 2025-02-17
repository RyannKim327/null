function findMaxValue(arr: number[]): number {
    return Math.max(...arr);
}

// Example usage
const numbers = [1, 5, 3, 7, 2];
const maxValue = findMaxValue(numbers);
console.log(maxValue); // Output: 7
function findMaxValue(arr: number[]): number | null {
    if (arr.length === 0) return null; // Return null for empty array
    return Math.max(...arr);
}

// Example usage
const numbers = [];
const maxValue = findMaxValue(numbers);
console.log(maxValue); // Output: null
