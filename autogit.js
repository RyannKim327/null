function findCommonElements(arr1, arr2) {
    // Create an empty array to store common elements
    let commonElements = [];

    // Iterate over each element in the first array
    for (let i = 0; i < arr1.length; i++) {
        // Check if the element exists in the second array
        if (arr2.includes(arr1[i]) && !commonElements.includes(arr1[i])) {
            // Add the element to the common elements array
            commonElements.push(arr1[i]);
        }
    }

    return commonElements;
}

// Example arrays
let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];

// Find common elements in the arrays
let commonElements = findCommonElements(array1, array2);
console.log(commonElements); // Output: [3, 4, 5]
