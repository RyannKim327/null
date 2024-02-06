function findCommonElements(array1, array2) {
  let commonElements = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      commonElements.push(array1[i]);
    }
  }
  return commonElements;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(findCommonElements(array1, array2)); // Output: [4, 5]
function findCommonElements(array1, array2) {
  return array1.filter(element => array2.includes(element));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(findCommonElements(array1, array2)); // Output: [4, 5]
function findCommonElements(array1, array2) {
  const set1 = new Set(array1);
  const commonElements = array2.filter(element => set1.has(element));
  return commonElements;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(findCommonElements(array1, array2)); // Output: [4, 5]
