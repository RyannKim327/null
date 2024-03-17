function findCommonElements(arr1, arr2) {
    let commonElements = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !commonElements.includes(arr1[i])) {
            commonElements.push(arr1[i]);
        }
    }

    return commonElements;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const commonElements = findCommonElements(array1, array2);
console.log(commonElements); // Output: [3, 4, 5]
