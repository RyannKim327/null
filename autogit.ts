function findCommonElements(arr1: any[], arr2: any[]): any[] {
    // Create a Set from the first array
    const set1 = new Set(arr1);

    // Filter the second array to include only elements that are in the set
    const commonElements = arr2.filter(item => set1.has(item));

    return commonElements;
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const common = findCommonElements(array1, array2);
console.log(common); // Output: [4, 5]
