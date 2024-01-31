function findCommonElements(arr1, arr2) {
  return arr1.filter(element => arr2.includes(element));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(findCommonElements(array1, array2)); // Output: [4, 5]
function findCommonElements(arr1, arr2) {
  return arr1.filter(element => arr2.indexOf(element) !== -1);
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(findCommonElements(array1, array2)); // Output: [4, 5]
function findCommonElements(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const result = [];

  for (const element of set1) {
    if (set2.has(element)) {
      result.push(element);
    }
  }
  
  return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(findCommonElements(array1, array2)); // Output: [4, 5]
