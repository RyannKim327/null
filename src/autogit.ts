function isSortedAscending(arr: number[]): boolean {
    // Iterate through the array and check the order
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; // If any element is greater than the next, the array is not sorted
        }
    }
    return true; // If all elements are in order, the array is sorted
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [5, 3, 8, 1];
const array3 = [10, 10, 15, 20];

console.log(isSortedAscending(array1)); // Output: true
console.log(isSortedAscending(array2)); // Output: false
console.log(isSortedAscending(array3)); // Output: true
function isSortedAscending(arr: number[]): boolean {
    return arr.every((value, index) => index === arr.length - 1 || value <= arr[index + 1]);
}

// Example usage:
console.log(isSortedAscending([1, 2, 3, 4])); // Output: true
console.log(isSortedAscending([4, 3, 2, 1])); // Output: false
