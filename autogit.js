function findCommonElements(array1, array2) {
    let commonElements = [];

    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i]) && !commonElements.includes(array1[i])) {
            commonElements.push(array1[i]);
        }
    }

    return commonElements;
}

// Example
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const result = findCommonElements(array1, array2);
console.log(result); // Output: [3, 4, 5]
