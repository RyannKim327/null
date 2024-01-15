function findCommonElements(array1, array2) {
  return array1.filter(element => array2.includes(element));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(findCommonElements(array1, array2)); // Output: [4, 5]
function findCommonElements(array1, array2) {
  const set = new Set(array2);
  return array1.filter(element => set.has(element));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(findCommonElements(array1, array2)); // Output: [4, 5]
function findCommonElements(array1, array2) {
  return array1.reduce((commonElements, element) => {
    if (array2.includes(element)) {
      commonElements.push(element);
    }
    return commonElements;
  }, []);
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(findCommonElements(array1, array2)); // Output: [4, 5]
