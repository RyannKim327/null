function findCommonElements(array1, array2) {
  const common = [];
  
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      common.push(array1[i]);
    }
  }
  
  return common;
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
  const common = [];

  for (const element of array2) {
    if (set1.has(element)) {
      common.push(element);
    }
  }

  return common;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

console.log(findCommonElements(array1, array2)); // Output: [4, 5]
