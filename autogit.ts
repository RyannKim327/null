const numbers: number[] = [5, 3, 8, 1, 4];

// Sort in ascending order
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 3, 4, 5, 8]
const numbers: number[] = [5, 3, 8, 1, 4];

// Sort in descending order
numbers.sort((a, b) => b - a);

console.log(numbers); // Output: [8, 5, 4, 3, 1]
function sortNumbersAsc(numbers: number[]): number[] {
    return numbers.sort((a, b) => a - b);
}

function sortNumbersDesc(numbers: number[]): number[] {
    return numbers.sort((a, b) => b - a);
}

const numbers = [5, 3, 8, 1, 4];

const sortedAsc = sortNumbersAsc(numbers);
console.log('Sorted Ascending:', sortedAsc); // Output: [1, 3, 4, 5, 8]

const sortedDesc = sortNumbersDesc(numbers);
console.log('Sorted Descending:', sortedDesc); // Output: [8, 5, 4, 3, 1]
const originalNumbers = [5, 3, 8, 1, 4];
const sortedNumbers = [...originalNumbers].sort((a, b) => a - b);
