function findMaximumValue(arr: number[]): number | undefined {
    if (arr.length === 0) return undefined; // Return undefined for empty array
    return Math.max(...arr);
}

// Example usage:
const numbers = [10, 5, 100, 2, 99];
const maxValue = findMaximumValue(numbers);
console.log(maxValue); // Output: 100
function findMaximumValueLoop(arr: number[]): number | undefined {
    if (arr.length === 0) return undefined;

    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Example usage:
const maxValueLoop = findMaximumValueLoop(numbers);
console.log(maxValueLoop); // Output: 100
