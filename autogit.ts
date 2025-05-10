function isArraySortedAsc<T>(arr: T[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; // The array is not sorted
        }
    }
    return true; // The array is sorted
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(isArraySortedAsc(numbers)); // Output: true

const notSortedNumbers = [1, 3, 2, 4, 5];
console.log(isArraySortedAsc(notSortedNumbers)); // Output: false
function isArraySortedAsc<T>(arr: T[]): boolean {
    return arr.every((value, index) => index === arr.length - 1 || value <= arr[index + 1]);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(isArraySortedAsc(numbers)); // Output: true

const notSortedNumbers = [1, 3, 2, 4, 5];
console.log(isArraySortedAsc(notSortedNumbers)); // Output: false
