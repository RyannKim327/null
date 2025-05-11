const originalArray = [1, 2, 3, 4, 3];
const valueToRemove = 3;
const newArray = originalArray.filter(element => element !== valueToRemove);
console.log(newArray); // [1, 2, 4]
const originalArray = [1, 2, 3, 4, 3];
const valueToRemove = 3;

const index = originalArray.indexOf(valueToRemove);
if (index > -1) {
  originalArray.splice(index, 1); // modifies original array
}
console.log(originalArray); // [1, 2, 4, 3]
const originalArray = ['a', 'b', 'c', 'd'];
const indexToRemove = 2;

originalArray.splice(indexToRemove, 1);
console.log(originalArray); // ['a', 'b', 'd']
