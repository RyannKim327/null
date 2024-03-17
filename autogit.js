function findCommonElements(array1, array2) {
    // Create an empty array to store common elements
    let commonElements = [];

    // Loop through the first array
    for (let element of array1) {
        // Check if the element exists in the second array
        if (array2.includes(element) && !commonElements.includes(element)) {
            // If the element is common and not already in the commonElements array, add it to the commonElements array
            commonElements.push(element);
        }
    }

    return commonElements;
}

// Example usage
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const result = findCommonElements(array1, array2);

console.log(result); // Output: [3, 4, 5]
