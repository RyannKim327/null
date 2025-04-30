function findMaxValue(arr: number[]): number | undefined {
    if (arr.length === 0) return undefined; // Handle empty array
    return Math.max(...arr);
}

// Example usage
const numbers = [1, 5, 3, 9, 2];
const maxNumber = findMaxValue(numbers);
console.log(`The maximum value is: ${maxNumber}`);
function findMaxValue(arr: number[]): number | undefined {
    if (arr.length === 0) return undefined; // Handle empty array

    let maxValue = arr[0]; // Start with the first element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i]; // Update maxValue if a larger number is found
        }
    }
    return maxValue;
}

// Example usage
const numbers = [1, 5, 3, 9, 2];
const maxNumber = findMaxValue(numbers);
console.log(`The maximum value is: ${maxNumber}`);
