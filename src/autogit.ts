function findCommonElements<T>(array1: T[], array2: T[]): T[] {
    // Convert the first array to a Set for fast lookups
    const set = new Set(array1);

    // Filter the second array to find elements present in the Set
    const commonElements = array2.filter(item => set.has(item));

    return commonElements;
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const common = findCommonElements(array1, array2);
console.log(common); // Output: [3, 4, 5]
function findCommonElementsWithLoops<T>(array1: T[], array2: T[]): T[] {
    const commonElements: T[] = [];
    for (const item1 of array1) {
        for (const item2 of array2) {
            if (item1 === item2) {
                commonElements.push(item1);
                break; // Avoid duplicates if arrays have repeated elements
            }
        }
    }
    return commonElements;
}
function findCommonElementsWithReduce<T>(array1: T[], array2: T[]): T[] {
    return array2.reduce((acc, item) => {
        if (array1.includes(item)) acc.push(item);
        return acc;
    }, [] as T[]);
}
