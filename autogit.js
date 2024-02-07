function findCommonElements(arr1, arr2) {
  return arr1.filter(element => arr2.includes(element));
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const commonElements = findCommonElements(array1, array2);
console.log(commonElements); // Output: [4, 5]
