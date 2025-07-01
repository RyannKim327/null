function isArraySortedAscending<T>(arr: T[]): boolean {
    // An empty array or an array with one element is always sorted
    if (arr.length <= 1) return true;

    // Iterate through the array and compare adjacent elements
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; // Not sorted
        }
    }

    return true; // Sorted
}
// Example 1: Sorted number array
const numbers1 = [1, 2, 3, 4, 5];
console.log(isArraySortedAscending(numbers1)); // Output: true

// Example 2: Unsorted number array
const numbers2 = [1, 3, 2, 4];
console.log(isArraySortedAscending(numbers2)); // Output: false

// Example 3: Sorted string array
const strings1 = ["apple", "banana", "cherry"];
console.log(isArraySortedAscending(strings1)); // Output: true

// Example 4: Unsorted string array
const strings2 = ["zebra", "apple", "banana"];
console.log(isArraySortedAscending(strings2)); // Output: false

// Example 5: Empty array
const emptyArray: number[] = [];
console.log(isArraySortedAscending(emptyArray)); // Output: true

// Example 6: Single-element array
const singleElementArray = [42];
console.log(isArraySortedAscending(singleElementArray)); // Output: true
