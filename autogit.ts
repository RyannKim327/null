const arr = [1, 2, 3, 4, 3];
const valueToRemove = 3;

const index = arr.indexOf(valueToRemove);
if (index !== -1) {
  arr.splice(index, 1);
}

console.log(arr); // Output: [1, 2, 4, 3]
const arr = [1, 2, 3, 4, 3];
const valueToRemove = 3;

const filteredArr = arr.filter(item => item !== valueToRemove);

console.log(filteredArr); // Output: [1, 2, 4]
const arr = ['a', 'b', 'c', 'd'];
const indexToRemove = 2;

arr.splice(indexToRemove, 1);

console.log(arr); // Output: ['a', 'b', 'd']
function removeElement<T>(array: T[], value: T): T[] {
  const index = array.indexOf(value);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
}
