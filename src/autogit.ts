const numbers = [10, 5, 20, 1];
numbers.sort();
console.log(numbers); // Output: [1, 10, 20, 5]
const numbers = [10, 5, 20, 1];

// Sort numbers in ascending order
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 5, 10, 20]
const numbers = [10, 5, 20, 1];

// Sort numbers in descending order
numbers.sort((a, b) => b - a);

console.log(numbers); // Output: [20, 10, 5, 1]
const numbers: number[] = [10, 5, 20, 1];

// Sort with type annotations
numbers.sort((a: number, b: number): number => a - b);

console.log(numbers); // Output: [1, 5, 10, 20]
function sortNumbers(numbers: number[], ascending: boolean = true): number[] {
    return numbers.sort((a, b) => {
        if (ascending) {
            return a - b; // Ascending order
        } else {
            return b - a; // Descending order
        }
    });
}

// Example usage:
const unsortedNumbers: number[] = [34, 7, 23, 32, 5, 62];

const sortedAscending = sortNumbers([...unsortedNumbers], true);
console.log('Ascending:', sortedAscending); // Output: [5, 7, 23, 32, 34, 62]

const sortedDescending = sortNumbers([...unsortedNumbers], false);
console.log('Descending:', sortedDescending); // Output: [62, 34, 32, 23, 7, 5]
npm install lodash
import _ from 'lodash';

const numbers = [10, 5, 20, 1];
const sortedNumbers = _.sortBy(numbers);

console.log(sortedNumbers); // Output: [1, 5, 10, 20]
