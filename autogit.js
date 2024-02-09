function findCommonElements(arr1, arr2) {
  let common = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      common.push(arr1[i]);
    }
  }
  return common;
}
function findCommonElements(arr1, arr2) {
  return arr1.filter((element) => arr2.includes(element));
}
function findCommonElements(arr1, arr2) {
  const set1 = new Set(arr1);
  return [...new Set(arr2.filter((item) => set1.has(item)))];
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const commonElements = findCommonElements(array1, array2);
console.log(commonElements); // Output: [4, 5]
