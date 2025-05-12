const array = [1, 2, 3, 2, 4];
const valueToRemove = 2;
const filteredArray = array.filter(item => item !== valueToRemove);
console.log(filteredArray); // [1, 3, 4]
const array = [1, 2, 3, 2, 4];
const valueToRemove = 2;
const index = array.indexOf(valueToRemove);
if (index > -1) {
  array.splice(index, 1);
}
console.log(array); // [1, 3, 2, 4]
const array = ['a', 'b', 'c', 'd'];
const indexToRemove = 2; // removes 'c'
if (indexToRemove > -1 && indexToRemove < array.length) {
  array.splice(indexToRemove, 1);
}
console.log(array); // ['a', 'b', 'd']
