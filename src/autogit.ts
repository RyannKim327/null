function isSortedAscending(array: number[]): boolean {
    // Loop through the array and compare adjacent elements
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false; // If any element is greater than the next, the array is not sorted
        }
    }
    return true; // If no violations are found, the array is sorted
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [5, 3, 8, 1];
const array3 = [10, 20, 20, 30]; // Allows duplicates

console.log(isSortedAscending(array1)); // Output: true
console.log(isSortedAscending(array2)); // Output: false
console.log(isSortedAscending(array3)); // Output: true
