function findCommonElements(array1, array2) {
  // Create an empty array to store the common elements
  const commonElements = [];
  
  // Iterate through the first array
  for (let i = 0; i < array1.length; i++) {
    // Check if the current element exists in the second array
    if (array2.includes(array1[i])) {
      // If it does, push the element to the commonElements array
      commonElements.push(array1[i]) ;
    }
  }
  
  // Return the common elements array
  return commonElements;
}

// Example usage
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const common = findCommonElements(array1, array2);
console.log(common); // Output: [4, 5]
