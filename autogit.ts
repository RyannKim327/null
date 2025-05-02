const numbers: number[] = [5, 3, 8, 1, 2];

numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 2, 3, 5, 8]
const numbers: number[] = [5, 3, 8, 1, 2];

numbers.sort((a, b) => b - a);

console.log(numbers); // Output: [8, 5, 3, 2, 1]
const ascendingSort = (arr: number[]): number[] => {
    return arr.sort((a, b) => a - b);
};

const descendingSort = (arr: number[]): number[] => {
    return arr.sort((a, b) => b - a);
};

const numbers: number[] = [5, 3, 8, 1, 2];

console.log("Original:", numbers);
console.log("Ascending:", ascendingSort([...numbers])); // Use spread operator to keep original array unchanged
console.log("Descending:", descendingSort([...numbers])); // Use spread operator to keep original array unchanged
