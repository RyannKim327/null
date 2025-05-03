function isArraySortedAscending(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; // Found an element greater than the next one
        }
    }
    return true; // No elements were out of order
}

// Example usage:
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [1, 3, 2, 4, 5];

console.log(isArraySortedAscending(numbers1)); // Output: true
console.log(isArraySortedAscending(numbers2)); // Output: false
