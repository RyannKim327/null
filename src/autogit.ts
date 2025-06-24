function findCommonElements<T>(array1: T[], array2: T[]): T[] {
    return array1.filter(item => array2.includes(item));
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];
const common = findCommonElements(arr1, arr2);
console.log(common); // Output: [4, 5]
function findCommonElementsWithSet<T>(array1: T[], array2: T[]): T[] {
    const set2 = new Set(array2);
    return array1.filter(item => set2.has(item));
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];
const common = findCommonElementsWithSet(arr1, arr2);
console.log(common); // Output: [4, 5]
function findCommonElementsUsingIntersection<T>(array1: T[], array2: T[]): T[] {
    const set1 = new Set(array1);
    const set2 = new Set(array2);
    return [...set1].filter(item => set2.has(item));
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];
const common = findCommonElementsUsingIntersection(arr1, arr2);
console.log(common); // Output: [4, 5]
function findCommonElementsWithDuplicates<T>(array1: T[], array2: T[]): T[] {
    const map = new Map<T, number>();
    const result: T[] = [];

    // Count occurrences in array2
    for (const item of array2) {
        map.set(item, (map.get(item) || 0) + 1);
    }

    // Find common elements with respect to counts
    for (const item of array1) {
        const count = map.get(item);
        if (count && count > 0) {
            result.push(item);
            map.set(item, count - 1);
        }
    }

    return result;
}

// Example usage:
const arr1 = [1, 2, 2, 3, 4];
const arr2 = [2, 2, 4, 5];
const common = findCommonElementsWithDuplicates(arr1, arr2);
console.log(common); // Output: [2, 2, 4]
