function isSortedAscending(arr: number[]): boolean {
    // Handle edge cases: empty array or single-element array
    if (arr.length <= 1) {
        return true;
    }

    // Iterate through the array and check the sorting condition
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; // The array is not sorted
        }
    }

    return true; // The array is sorted
}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 3, 8, 1];
const arr3 = [];
const arr4 = [42];

console.log(isSortedAscending(arr1)); // Output: true
console.log(isSortedAscending(arr2)); // Output: false
console.log(isSortedAscending(arr3)); // Output: true
console.log(isSortedAscending(arr4)); // Output: true
