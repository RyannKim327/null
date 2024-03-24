function findCommonElements(arr1, arr2) {
    let commonElements = [];
  
    // Loop through the first array
    for (let i = 0; i < arr1.length; i++) {
        // Check if the current element is present in the second array
        if (arr2.includes(arr1[i])) {
            // If it is, add it to the commonElements array
            commonElements.push(arr1[i]);
        }
    }
  
    // Return the array containing the common elements
    return commonElements;
}

// Example arrays
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

// Find common elements in the arrays
const commonElements = findCommonElements(array1, array2);
console.log(commonElements); // Output: [3, 4, 5]
