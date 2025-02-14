function isArraySorted(arr: number[]): boolean {
    return arr.every((value, index) => index === 0 || value >= arr[index - 1]);
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 3, 4, 1];

console.log(isArraySorted(arr1)); // true
console.log(isArraySorted(arr2)); // false
function isArraySorted(arr: number[]): boolean {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 3, 4, 1];

console.log(isArraySorted(arr1)); // true
console.log(isArraySorted(arr2)); // false
