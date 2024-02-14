function findCommonElements(arr1, arr2) {
  return arr1.filter(element => arr2.includes(element));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const commonElements = findCommonElements(array1, array2);

console.log(commonElements); // Output: [4, 5]
function findCommonElements(arr1, arr2) {
  const set1 = new Set(arr1);
  const commonElements = arr2.filter(element => set1.has(element));
  return commonElements;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const commonElements = findCommonElements(array1, array2);

console.log(commonElements); // Output: [4, 5]
function findCommonElements(arr1, arr2) {
  return arr1.reduce((common, element) => {
    if (arr2.includes(element)) {
      common.push(element);
    }
    return common;
  }, []);
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const commonElements = findCommonElements(array1, array2);

console.log(commonElements); // Output: [4, 5]
