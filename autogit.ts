function isArraySorted(arr: number[]): boolean {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false; // Found an element that is less than the previous one
        }
    }
    return true; // No elements were found that break the order
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
console.log(isArraySorted(myArray)); // true
function isArraySorted(arr: number[]): boolean {
    return arr.every((value, index) => index === 0 || value >= arr[index - 1]);
}

// Example usage:
const myArray = [1, 2, 2, 3, 4];
console.log(isArraySorted(myArray)); // true
