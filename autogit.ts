const arr = [1, 2, 3, 4, 5];
const index = arr.indexOf(3); // find the index of the element to remove
if (index !== -1) {
  arr.splice(index, 1); // remove the element at the index
}
console.log(arr); // [1, 2, 4, 5]
const arr = [1, 2, 3, 4, 5];
const newArr = arr.filter(item => item !== 3);
console.log(newArr); // [1, 2, 4, 5]
const arr = [1, 2, 3, 4, 5];
const index = arr.indexOf(3);
if (index !== -1) {
  const left = arr.slice(0, index);
  const right = arr.slice(index + 1);
  arr = left.concat(right);
}
console.log(arr); // [1, 2, 4, 5]
import { reject } from 'lodash';
const arr = [1, 2, 3, 4, 5];
const newArr = reject(arr, item => item === 3);
console.log(newArr); // [1, 2, 4, 5]
