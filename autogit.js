// Function to find common elements in two arrays
function findCommonElements(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}

// Example arrays
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

// Find common elements
const commonElements = findCommonElements(array1, array2);

console.log("Common elements:", commonElements); // Output: [3, 4, 5]
