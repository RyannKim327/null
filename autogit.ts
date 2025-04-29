function sortArray(arr: number[]): number[] {
    return arr.sort((a, b) => a - b);
}

// Example usage:
const numbers: number[] = [5, 3, 8, 1, 2];
const sortedNumbers = sortArray(numbers);
console.log(sortedNumbers); // Output: [1, 2, 3, 5, 8]
const sortedNumbers = [...numbers].sort((a, b) => a - b);
function sortArrayDescending(arr: number[]): number[] {
    return arr.sort((a, b) => b - a);
}

// Example usage:
const sortedNumbersDesc = sortArrayDescending(numbers);
console.log(sortedNumbersDesc); // Output: [8, 5, 3, 2, 1]
