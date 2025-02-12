function findCommonElements(arr1: number[], arr2: number[]): number[] {
    return arr1.filter(element => arr2.includes(element));
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const commonElements = findCommonElements(array1, array2);
console.log(commonElements); // Output: [4, 5]
function findCommonElementsSet(arr1: number[], arr2: number[]): number[] {
    const set1 = new Set(arr1);
    return arr2.filter(element => set1.has(element));
}

// Example usage:
const commonElementsSet = findCommonElementsSet(array1, array2);
console.log(commonElementsSet); // Output: [4, 5]
