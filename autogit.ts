function isArraySorted(arr: number[]): boolean {
    return arr.every((value, index) => {
        if (index === 0) return true; // Skip the first element
        return value >= arr[index - 1]; // Check if current value is greater than or equal to previous value
    });
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5];
const unsortedArray = [1, 3, 2, 4, 5];

console.log(isArraySorted(sortedArray)); // true
console.log(isArraySorted(unsortedArray)); // false
