function findMaxValue(arr: number[]): number | null {
    // Check if the array is empty
    if (arr.length === 0) {
        return null; // or you could throw an error
    }
    return Math.max(...arr);
}

// Example usage:
const numbers = [3, 5, 7, 2, 8, -1, 0];
const maxValue = findMaxValue(numbers);
console.log(maxValue); // Output: 8
function findMaxValue(arr: number[]): number | null {
    if (arr.length === 0) {
        return null; // or throw an error
    }

    let max = arr[0];
    for (const num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

// Example usage:
const numbers = [3, 5, 7, 2, 8, -1, 0];
const maxValue = findMaxValue(numbers);
console.log(maxValue); // Output: 8
