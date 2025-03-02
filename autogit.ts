function findCommonElements<T>(array1: T[], array2: T[]): T[] {
    return array1.filter(item => array2.includes(item));
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const commonElements = findCommonElements(array1, array2);
console.log(commonElements); // Output: [4, 5]
function findCommonElementsUsingSet<T>(array1: T[], array2: T[]): T[] {
    const set1 = new Set(array1);
    const set2 = new Set(array2);

    const commonElements = [...set1].filter(item => set2.has(item));
    return commonElements;
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const commonElements = findCommonElementsUsingSet(array1, array2);
console.log(commonElements); // Output: [4, 5]
