function findCommonElements<T>(array1: T[], array2: T[]): T[] {
    return array1.filter(element => array2.includes(element));
}

// Example usage:
const arrayA = [1, 2, 3, 4, 5];
const arrayB = [4, 5, 6, 7, 8];

const commonElements = findCommonElements(arrayA, arrayB);
console.log(commonElements); // Output: [4, 5]
function findCommonElements<T>(array1: T[], array2: T[]): T[] {
    const setB = new Set(array2);
    return array1.filter(element => setB.has(element));
}

// Example usage:
const arrayA = [1, 2, 3, 4, 5];
const arrayB = [4, 5, 6, 7, 8];

const commonElements = findCommonElements(arrayA, arrayB);
console.log(commonElements); // Output: [4, 5]
