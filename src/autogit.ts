function findCommonElements<T>(array1: T[], array2: T[]): T[] {
    const set = new Set(array2); // Convert the second array to a Set for fast lookup
    return array1.filter(item => set.has(item)); // Filter elements present in the Set
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];

const common = findCommonElements(arr1, arr2);
console.log(common); // Output: [4, 5]
function findCommonElements<T>(array1: T[], array2: T[]): T[] {
    return array1.filter(item => array2.includes(item));
}

// Example usage:
const arr1 = ['a', 'b', 'c'];
const arr2 = ['b', 'c', 'd'];

const common = findCommonElements(arr1, arr2);
console.log(common); // Output: ['b', 'c']
function findCommonElements<T>(array1: T[], array2: T[]): T[] {
    const set = new Set(array2);
    return array1.reduce((acc, item) => {
        if (set.has(item)) acc.push(item);
        return acc;
    }, [] as T[]);
}

// Example usage:
const arr1 = [10, 20, 30, 40];
const arr2 = [30, 40, 50, 60];

const common = findCommonElements(arr1, arr2);
console.log(common); // Output: [30, 40]
function findUniqueCommonElements<T>(array1: T[], array2: T[]): T[] {
    const set1 = new Set(array1);
    const set2 = new Set(array2);
    return [...set1].filter(item => set2.has(item));
}

// Example usage:
const arr1 = [1, 2, 2, 3];
const arr2 = [2, 2, 4];

const common = findUniqueCommonElements(arr1, arr2);
console.log(common); // Output: [2]
function findCommonElementsSorted<T>(array1: T[], array2: T[]): T[] {
    const result: T[] = [];
    let i = 0, j = 0;

    while (i < array1.length && j < array2.length) {
        if (array1[i] === array2[j]) {
            result.push(array1[i]);
            i++;
            j++;
        } else if (array1[i] < array2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return result;
}

// Example usage:
const arr1 = [1, 3, 4, 6, 7];
const arr2 = [2, 3, 5, 6];

const common = findCommonElementsSorted(arr1, arr2);
console.log(common); // Output: [3, 6]
