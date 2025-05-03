function findCommonElements(arr1: number[], arr2: number[]): number[] {
    return arr1.filter(value => arr2.includes(value));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const commonElements = findCommonElements(array1, array2);
console.log(commonElements); // Output: [4, 5]
function findCommonElements(arr1: number[], arr2: number[]): number[] {
    const set = new Set(arr1);
    return arr2.filter(value => set.has(value));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const commonElements = findCommonElements(array1, array2);
console.log(commonElements); // Output: [4, 5]
