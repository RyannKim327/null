function findCommonElements(array1, array2) {
  let commonElements = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      commonElements.push(array1[i]);
    }
  }
  return commonElements;
}
function findCommonElements(array1, array2) {
  return array1.filter(element => array2.includes(element));
}
function findCommonElements(array1, array2) {
  const set = new Set(array1);
  return array2.filter(element => set.has(element));
}
function findCommonElements(array1, array2) {
  const set1 = new Set(array1);
  const set2 = new Set(array2);
  return [...set1].filter(element => set2.has(element));
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const commonElements = findCommonElements(array1, array2);
console.log(commonElements); // Output: [4, 5]
