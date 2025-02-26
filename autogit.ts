function isArraySortedAsc(arr: number[]): boolean {
    return arr.every((value, index) => index === 0 || value >= arr[index - 1]);
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5];
const unsortedArray = [1, 3, 2, 4, 5];

console.log(isArraySortedAsc(sortedArray)); // Output: true
console.log(isArraySortedAsc(unsortedArray)); // Output: false
