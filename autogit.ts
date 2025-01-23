const arr: number[] = [1, 2, 3, 4, 5];
const max = Math.max(...arr);
console.log(max); // 5
const arr: number[] = [1, 2, 3, 4, 5];
const max = arr.reduce((a, b) => a > b ? a : b, -Infinity);
console.log(max); // 5
const arr: number[] = [1, 2, 3, 4, 5];
let max = -Infinity;
arr.forEach((value) => {
  if (value > max) {
    max = value;
  }
});
console.log(max); // 5
const arr: number[] = [1, 2, 3, 4, 5];
const max = arr.find((value) => value === Math.max(...arr));
console.log(max); // 5
import _ from 'lodash';

const arr: number[] = [1, 2, 3, 4, 5];
const max = _.max(arr);
console.log(max); // 5
