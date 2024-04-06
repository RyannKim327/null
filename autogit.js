function findCommonElements(array1, array2) {
    return array1.filter(item => array2.includes(item));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const commonElements = findCommonElements(array1, array2);

console.log(commonElements); // Output: [3, 4, 5]
