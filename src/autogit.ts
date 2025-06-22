function isSortedAscending(array: number[]): boolean {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false; // The array is not sorted in ascending order
        }
    }
    return true; // The array is sorted in ascending order
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 3, 2, 4, 5];
const array3 = [];

console.log(isSortedAscending(array1)); // Output: true
console.log(isSortedAscending(array2)); // Output: false
console.log(isSortedAscending(array3)); // Output: true (empty arrays are considered sorted)
function isSortedAscending(array: number[]): boolean {
    return array.every((value, index) => index === 0 || value >= array[index - 1]);
}
function isSortedAscending(array: number[]): boolean {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}
