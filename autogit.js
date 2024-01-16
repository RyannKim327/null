function findCommonElements(arr1, arr2) {
  const commonElements = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        commonElements.push(arr1[i]);
        break;
      }
    }
  }
  
  return commonElements;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7];

console.log(findCommonElements(array1, array2)); // Output: [4, 5]
function findCommonElements(arr1, arr2) {
  return arr1.filter(value => arr2.includes(value));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7];

console.log(findCommonElements(array1, array2)); // Output: [4, 5]
function findCommonElements(arr1, arr2) {
  const set1 = new Set(arr1);
  const commonElements = [];

  for (const value of arr2) {
    if (set1.has(value)) {
      commonElements.push(value);
    }
  }
  
  return commonElements;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7];

console.log(findCommonElements(array1, array2)); // Output: [4, 5]
