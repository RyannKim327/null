const arr: number[] = [3, 1, 4, 1, 5, 9, 2];
const max = Math.max(...arr);
console.log(max); // Output: 9
const arr: number[] = [3, 1, 4, 1, 5, 9, 2];
const max = arr.reduce((max, current) => Math.max(max, current), -Infinity);
console.log(max); // Output: 9
const arr: number[] = [3, 1, 4, 1, 5, 9, 2];
let max = -Infinity;
arr.forEach((value) => {
  if (value > max) {
    max = value;
  }
});
console.log(max); // Output: 9
import _ from 'lodash';

const arr: number[] = [3, 1, 4, 1, 5, 9, 2];
const max = _.max(arr);
console.log(max); // Output: 9
