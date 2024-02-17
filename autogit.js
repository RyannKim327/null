function findCommonElements(array1, array2) {
    // Create an empty array to store common elements
    let commonElements = [];

    // Iterate through the first array
    for (let i = 0; i < array1.length; i++) {
        // Check if the element is present in the second array
        if (array2.includes(array1[i]) && !commonElements.includes(array1[i])) {
            // If present and not already added to the common elements array, add it
            commonElements.push(array1[i]);
        }
    }

    return commonElements;
}

// Example arrays
let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];

// Find common elements
let commonElements = findCommonElements(array1, array2);
console.log(commonElements); // Output: [3, 4, 5]
