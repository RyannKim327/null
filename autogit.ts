const array = [1, 2, 3, 4, 2];
const valueToRemove = 2;

const newArray = array.filter(item => item !== valueToRemove);
console.log(newArray); // [1, 3, 4]
const array = [1, 2, 3, 4, 2];
const valueToRemove = 2;

const index = array.indexOf(valueToRemove);
if (index > -1) {
  array.splice(index, 1);
}
console.log(array); // [1, 3, 4, 2]
const array = [1, 2, 3, 4, 5];
const indexToRemove = 2;

array.splice(indexToRemove, 1);
console.log(array); // [1, 2, 4, 5]
