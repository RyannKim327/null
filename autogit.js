function findCommonElements(arr1, arr2) {
  let commonElements = [];
  
  // Iterate through the first array
  for (let element of arr1) {
    // Check if the element is present in the second array
    if (arr2.includes(element) && !commonElements.includes(element)) {
      commonElements.push(element);
    }
  }
  
  return commonElements;
}

// Example arrays
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const commonElements = findCommonElements(array1, array2);
console.log(commonElements); // Output: [4, 5]
