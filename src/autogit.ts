const numbers = [10, 5, 20, 1];
numbers.sort();
console.log(numbers); // Output: [1, 10, 20, 5]
const numbersAscending = [10, 5, 20, 1];
numbersAscending.sort((a, b) => a - b);
console.log(numbersAscending); // Output: [1, 5, 10, 20]
const numbersDescending = [10, 5, 20, 1];
numbersDescending.sort((a, b) => b - a);
console.log(numbersDescending); // Output: [20, 10, 5, 1]
// Define an array of numbers
const numbers: number[] = [45, 12, 8, 130, 44];

// Sort in ascending order
const sortedAscending = [...numbers].sort((a, b) => a - b);
console.log('Ascending:', sortedAscending); // Output: [8, 12, 44, 45, 130]

// Sort in descending order
const sortedDescending = [...numbers].sort((a, b) => b - a);
console.log('Descending:', sortedDescending); // Output: [130, 45, 44, 12, 8]
type NumberArray = number[];

function sortNumbers(array: NumberArray, ascending: boolean = true): NumberArray {
    const compareFunction = ascending 
        ? (a: number, b: number) => a - b 
        : (a: number, b: number) => b - a;
    
    return [...array].sort(compareFunction);
}

// Usage
const myNumbers: NumberArray = [7, 3, 9, 1, 5];
const sortedAsc = sortNumbers(myNumbers);
console.log('Sorted Ascending:', sortedAsc); // Output: [1, 3, 5, 7, 9]

const sortedDesc = sortNumbers(myNumbers, false);
console.log('Sorted Descending:', sortedDesc); // Output: [9, 7, 5, 3, 1]
