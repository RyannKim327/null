function isArraySortedAsc(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; // Found an element greater than the next
        }
    }
    return true; // All elements are in ascending order
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(isArraySortedAsc(numbers)); // Output: true

const unsortedNumbers = [1, 3, 2, 4, 5];
console.log(isArraySortedAsc(unsortedNumbers)); // Output: false
