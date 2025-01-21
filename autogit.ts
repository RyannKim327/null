const arr = [1, 2, 3, 4, 5];
const index = arr.indexOf(3); // find the index of the element to remove
if (index !== -1) {
  arr.splice(index, 1); // remove 1 element at the found index
}
console.log(arr); // [1, 2, 4, 5]
const arr = [1, 2, 3, 4, 5];
const newArr = arr.filter(item => item !== 3); // create a new array without the element
console.log(newArr); // [1, 2, 4, 5]
const arr = [1, 2, 3, 4, 5];
const index = arr.indexOf(3); // find the index of the element to remove
if (index !== -1) {
  arr = [...arr.slice(0, index), ...arr.slice(index + 1)]; // create a new array without the element
}
console.log(arr); // [1, 2, 4, 5]
import { without } from 'lodash';
const arr = [1, 2, 3, 4, 5];
const newArr = without(arr, 3); // create a new array without the element
console.log(newArr); // [1, 2, 4, 5]
