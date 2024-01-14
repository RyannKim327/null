function findCommonElements(array1, array2) {
  const commonElements = [];

  array1.forEach(element => {
    if (array2.includes(element)) {
      commonElements.push(element);
    }
  });

  return commonElements;
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const result = findCommonElements(array1, array2);
console.log(result); // Output: [4, 5]
