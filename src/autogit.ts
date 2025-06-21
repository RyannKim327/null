function findCommonElements<T>(arr1: T[], arr2: T[]): T[] {
    const set = new Set(arr1); // Create a Set from the first array
    return arr2.filter(item => set.has(item)); // Filter elements present in the Set
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const common = findCommonElements(array1, array2);
console.log(common); // Output: [3, 4, 5]
function findCommonElements<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.filter(item => arr2.includes(item));
}

// Example usage:
const array1 = ['apple', 'banana', 'cherry'];
const array2 = ['banana', 'dragonfruit', 'apple'];

const common = findCommonElements(array1, array2);
console.log(common); // Output: ['apple', 'banana']
function findCommonElements<T>(arr1: T[], arr2: T[]): T[] {
    const set = new Set(arr2); // Create a Set from the second array
    return arr1.reduce((acc, item) => {
        if (set.has(item)) acc.push(item);
        return acc;
    }, [] as T[]);
}

// Example usage:
const array1 = [10, 20, 30, 40];
const array2 = [30, 40, 50, 60];

const common = findCommonElements(array1, array2);
console.log(common); // Output: [30, 40]
import _ from 'lodash';

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const common = _.intersection(array1, array2);
console.log(common); // Output: [3, 4]
