const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const commonElements = array1.filter(element => array2.includes(element));

console.log(commonElements); // Output: [3, 4]
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const set2 = new Set(array2);
const commonElements = array1.filter(element => set2.has(element));

console.log(commonElements); // Output: [3, 4]
function getCommonElements<T>(arr1: T[], arr2: T[]): T[] {
  const set2 = new Set(arr2);
  return arr1.filter(item => set2.has(item));
}

const result = getCommonElements([1, 2, 3], [2, 3, 4]);
console.log(result); // [2, 3]
