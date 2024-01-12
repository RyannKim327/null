function findCommonElements(arr1, arr2) {
  const commonElements = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      commonElements.push(arr1[i]);
    }
  }
  return commonElements;
}
function findCommonElements(arr1, arr2) {
  const commonElements = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) !== -1) {
      commonElements.push(arr1[i]);
    }
  }
  return commonElements;
}
function findCommonElements(arr1, arr2) {
  const set2 = new Set(arr2);
  const commonElements = arr1.filter((element) => set2.has(element));
  return commonElements;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const commonElements = findCommonElements(array1, array2);
console.log(commonElements);  // Output: [4, 5]
