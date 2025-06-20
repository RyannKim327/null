function getCommonElements<T>(array1: T[], array2: T[]): T[] {
    return array1.filter(item => array2.includes(item));
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

const common = getCommonElements(arr1, arr2);
console.log(common); // Output: [3, 4, 5]
function getCommonElementsWithSet<T>(array1: T[], array2: T[]): T[] {
    const set = new Set(array2);
    return array1.filter(item => set.has(item));
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

const common = getCommonElementsWithSet(arr1, arr2);
console.log(common); // Output: [3, 4, 5]
function getCommonElementsWithDuplicates<T>(array1: T[], array2: T[]): T[] {
    const map = new Map<T, number>();

    // Count occurrences in the first array
    array1.forEach(item => {
        map.set(item, (map.get(item) || 0) + 1);
    });

    const common: T[] = [];

    // Iterate through the second array and collect common elements
    array2.forEach(item => {
        const count = map.get(item);
        if (count && count > 0) {
            common.push(item);
            map.set(item, count - 1);
        }
    });

    return common;
}

// Example usage:
const arr1 = [1, 2, 2, 3, 4];
const arr2 = [2, 2, 3, 5];

const common = getCommonElementsWithDuplicates(arr1, arr2);
console.log(common); // Output: [2, 2, 3]
npm install lodash
import _ from 'lodash';

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

const common = _.intersection(arr1, arr2);
console.log(common); // Output: [3, 4, 5]
interface Item {
    id: number;
    name: string;
}

const arr1: Item[] = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
const arr2: Item[] = [{ id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];

// Using a unique identifier (e.g., id) to find common elements
const common = arr1.filter(item1 =>
    arr2.some(item2 => item2.id === item1.id)
);

console.log(common);
// Output: [{ id: 2, name: 'Bob' }]
