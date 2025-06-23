function findCommonElements<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.filter(item => arr2.includes(item));
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const common = findCommonElements(array1, array2);
console.log(common); // Output: [4, 5]
function findCommonElementsWithSet<T>(arr1: T[], arr2: T[]): T[] {
    const set = new Set(arr2);
    return arr1.filter(item => set.has(item));
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const common = findCommonElementsWithSet(array1, array2);
console.log(common); // Output: [4, 5]
function findCommonElementsWithDuplicates<T>(arr1: T[], arr2: T[]): T[] {
    const frequencyMap = new Map<T, number>();
    const commonElements: T[] = [];

    // Build frequency map for the first array
    for (const item of arr1) {
        frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1);
    }

    // Iterate through the second array and collect common elements
    for (const item of arr2) {
        const count = frequencyMap.get(item);
        if (count && count > 0) {
            commonElements.push(item);
            frequencyMap.set(item, count - 1);
        }
    }

    return commonElements;
}

// Example usage:
const array1 = [1, 2, 2, 3, 4];
const array2 = [2, 2, 4, 4, 5];

const common = findCommonElementsWithDuplicates(array1, array2);
console.log(common); // Output: [2, 2, 4]
function findCommonUniqueElements<T>(arr1: T[], arr2: T[]): T[] {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    return [...set1].filter(item => set2.has(item));
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const common = findCommonUniqueElements(array1, array2);
console.log(common); // Output: [4, 5]
function findCommonElementsBySorting<T>(arr1: T[], arr2: T[]): T[] {
    arr1.sort();
    arr2.sort();

    const common: T[] = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            common.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return common;
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const common = findCommonElementsBySorting(array1, array2);
console.log(common); // Output: [4, 5]
// Method 1: Using filter and includes
function findCommonFilterIncludes<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.filter(item => arr2.includes(item));
}

// Method 2: Using Set for efficiency
function findCommonWithSet<T>(arr1: T[], arr2: T[]): T[] {
    const set = new Set(arr2);
    return arr1.filter(item => set.has(item));
}

// Method 3: Handling duplicates with frequency map
function findCommonWithDuplicates<T>(arr1: T[], arr2: T[]): T[] {
    const freqMap = new Map<T, number>();
    const common: T[] = [];

    for (const item of arr1) {
        freqMap.set(item, (freqMap.get(item) || 0) + 1);
    }

    for (const item of arr2) {
        const count = freqMap.get(item);
        if (count && count > 0) {
            common.push(item);
            freqMap.set(item, count - 1);
        }
    }

    return common;
}

// Method 4: Using ES6 Set and spread
function findCommonUniqueES6<T>(arr1: T[], arr2: T[]): T[] {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    return [...set1].filter(item => set2.has(item));
}

// Method 5: Sorting and two pointers
function findCommonTwoPointers<T>(arr1: T[], arr2: T[]): T[] {
    arr1.sort();
    arr2.sort();

    const common: T[] = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            common.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return common;
}

// Example Usage
const array1 = [1, 2, 2, 3, 4, 5];
const array2 = [2, 2, 4, 4, 5, 6];

console.log('Method 1:', findCommonFilterIncludes(array1, array2)); // [2, 2, 4, 5]
console.log('Method 2:', findCommonWithSet(array1, array2));        // [2, 2, 4, 5]
console.log('Method 3:', findCommonWithDuplicates(array1, array2)); // [2, 2, 4, 5]
console.log('Method 4:', findCommonUniqueES6(array1, array2));      // [2, 4, 5]
console.log('Method 5:', findCommonTwoPointers(array1, array2));    // [2, 2, 4, 5]
Method 1: [2, 2, 4, 5]
Method 2: [2, 2, 4, 5]
Method 3: [2, 2, 4, 5]
Method 4: [2, 4, 5]
Method 5: [2, 2, 4, 5]
