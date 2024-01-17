function findCommonElements(arr1, arr2) {
  const commonElements = [];
  arr1.forEach((item) => {
    if (arr2.includes(item)) {
      commonElements.push(item);
    }
  });
  return commonElements;
}
function findCommonElements(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}
function findCommonElements(arr1, arr2) {
  const set1 = new Set(arr1);
  const commonElements = arr2.filter(item => set1.has(item));
  return commonElements;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const commonElements = findCommonElements(array1, array2);
console.log(commonElements); // Output: [4, 5]
