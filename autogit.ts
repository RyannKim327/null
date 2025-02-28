function isArraySortedAsc(arr: number[]): boolean {
    return arr.every((value, index) => {
        if (index === arr.length - 1) return true; // last element has no next element to compare
        return value <= arr[index + 1];
    });
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 3, 4, 2, 1];

console.log(isArraySortedAsc(arr1)); // true
console.log(isArraySortedAsc(arr2)); // false
