function findCommonElements(arr1: number[], arr2: number[]): number[] {
    return arr1.filter(value => arr2.includes(value));
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const commonElements = findCommonElements(array1, array2);
console.log(commonElements); // Output: [3, 4, 5]
function findCommonElements(arr1: number[], arr2: number[]): number[] {
    const set = new Set(arr2);
    return arr1.filter(value => set.has(value));
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const commonElements = findCommonElements(array1, array2);
console.log(commonElements); // Output: [3, 4, 5]
function findCommonElements(arr1: number[], arr2: number[]): number[] {
    return arr1.reduce((acc, value) => {
        if (arr2.includes(value)) {
            acc.push(value);
        }
        return acc;
    }, [] as number[]);
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const commonElements = findCommonElements(array1, array2);
console.log(commonElements); // Output: [3, 4, 5]
