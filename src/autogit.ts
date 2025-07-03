function findCommonElements(arr1: number[], arr2: number[]): number[] {
    return arr1.filter(value => arr2.includes(value));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const commonElements = findCommonElements(array1, array2);
console.log(commonElements); // Output: [3, 4, 5]
function findCommonElements(arr1: number[], arr2: number[]): number[] {
    const set1 = new Set(arr1);
    return arr2.filter(value => set1.has(value));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const commonElements = findCommonElements(array1, array2);
console.log(commonElements); // Output: [3, 4, 5]
function findCommonElements(arr1: number[], arr2: number[]): number[] {
    return arr1.reduce((acc: number[], value) => {
        if (arr2.includes(value)) {
            acc.push(value);
        }
        return acc;
    }, []);
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const commonElements = findCommonElements(array1, array2);
console.log(commonElements); // Output: [3, 4, 5]
function findCommonElements(arr1: number[], arr2: number[]): number[] {
    const commonElements: number[] = [];
    arr1.forEach(value => {
        if (arr2.includes(value)) {
            commonElements.push(value);
        }
    });
    return commonElements;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const commonElements = findCommonElements(array1, array2);
console.log(commonElements); // Output: [3, 4, 5]
