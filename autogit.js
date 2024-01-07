function findCommonElements(arr1, arr2) {
  return arr1.filter(element => arr2.includes(element));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7];

console.log(findCommonElements(array1, array2)); // Output: [4, 5]
function findCommonElements(arr1, arr2) {
  const commonElements = [];
  arr1.forEach(element => {
    if (arr2.includes(element)) {
      commonElements.push(element);
    }
  });
  return commonElements;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7];

console.log(findCommonElements(array1, array2)); // Output: [4, 5]
function findCommonElements(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(element => set2.has(element));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7];

console.log(findCommonElements(array1, array2)); // Output: [4, 5]
