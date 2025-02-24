function getCommonElements(array1: number[], array2: number[]): number[] {
    // Create a set from the first array
    const set = new Set(array1);
    
    // Filter the second array to get common elements
    return array2.filter(item => set.has(item));
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const commonElements = getCommonElements(array1, array2);
console.log(commonElements); // Output: [4, 5]
