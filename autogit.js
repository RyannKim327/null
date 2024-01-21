function findCommonElements(array1, array2) {
  const commonElements = [];

  for (let i = 0; i < array1.length; i++) {
    const element = array1[i];

    if (array2.includes(element) && !commonElements.includes(element)) {
      commonElements.push(element);
    }
  }

  return commonElements;
}

// Example usage
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const commonElements = findCommonElements(array1, array2);
console.log(commonElements); // Output: [4, 5]
