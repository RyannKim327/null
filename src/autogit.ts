function findCommonElements<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.filter(item => arr2.includes(item));
}

// Example Usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const commonElements = findCommonElements(array1, array2);
console.log(commonElements); // Output: [4, 5]
function findCommonElements<T>(arr1: T[], arr2: T[]): T[] {
    const set = new Set(arr2);
    return arr1.filter(item => set.has(item));
}

// Example Usage:
const array1 = ['apple', 'banana', 'cherry'];
const array2 = ['banana', 'dragonfruit', 'apple'];

const commonFruits = findCommonElements(array1, array2);
console.log(commonFruits); // Output: ['apple', 'banana']
function findUniqueCommonElements<T>(arr1: T[], arr2: T[]): T[] {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    return [...set1].filter(item => set2.has(item)).sort();
}

// Example Usage:
const numbers1 = [1, 2, 2, 3, 4];
const numbers2 = [3, 4, 4, 5, 6];

const uniqueCommonNumbers = findUniqueCommonElements(numbers1, numbers2);
console.log(uniqueCommonNumbers); // Output: [3, 4]
function findCommonElementsWithReduce<T>(arr1: T[], arr2: T[]): T[] {
    const set = new Set(arr2);
    return arr1.reduce((acc, item) => {
        if (set.has(item)) {
            acc.push(item);
        }
        return acc;
    }, [] as T[]);
}

// Example Usage:
const letters1 = ['a', 'b', 'c', 'd'];
const letters2 = ['c', 'd', 'e', 'f'];

const commonLetters = findCommonElementsWithReduce(letters1, letters2);
console.log(commonLetters); // Output: ['c', 'd']
npm install lodash
import _ from 'lodash';

const arrayA = [10, 20, 30, 40];
const arrayB = [30, 40, 50, 60];

const common = _.intersection(arrayA, arrayB);
console.log(common); // Output: [30, 40]
// Using filter and includes
function findCommonFilterIncludes<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.filter(item => arr2.includes(item));
}

// Using Set for better performance
function findCommonWithSet<T>(arr1: T[], arr2: T[]): T[] {
    const set = new Set(arr2);
    return arr1.filter(item => set.has(item));
}

// Using reduce for more control
function findCommonWithReduce<T>(arr1: T[], arr2: T[]): T[] {
    const set = new Set(arr2);
    return arr1.reduce((acc, item) => {
        if (set.has(item)) acc.push(item);
        return acc;
    }, [] as T[]);
}

// Example Usage
const fruits1 = ['apple', 'banana', 'cherry', 'date'];
const fruits2 = ['banana', 'date', 'fig', 'grape'];

console.log(findCommonFilterIncludes(fruits1, fruits2)); // ['banana', 'date']
console.log(findCommonWithSet(fruits1, fruits2));       // ['banana', 'date']
console.log(findCommonWithReduce(fruits1, fruits2));    // ['banana', 'date']

// Using Lodash
import _ from 'lodash';
console.log(_.intersection(fruits1, fruits2));           // ['banana', 'date']
