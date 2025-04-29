function isArraySortedAscending(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; // Found an element greater than the next
        }
    }
    return true; // No elements found out of order
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5];
const unsortedArray = [1, 3, 2, 4, 5];

console.log(isArraySortedAscending(sortedArray)); // Output: true
console.log(isArraySortedAscending(unsortedArray)); // Output: false
