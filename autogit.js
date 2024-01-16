function findCommonElements(arr1, arr2) {
  let commonElements = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      commonElements.push(arr1[i]);
    }
  }

  return commonElements;
}
function findCommonElements(arr1, arr2) {
  return arr1.filter((element) => arr2.includes(element));
}
function findCommonElements(arr1, arr2) {
  const set1 = new Set(arr1);
  const commonElements = new Set();

  arr2.forEach((element) => {
    if (set1.has(element)) {
      commonElements.add(element);
    }
  });

  return Array.from(commonElements);
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7];
console.log(findCommonElements(array1, array2));  // Output: [4, 5]
