const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = Array.from(new Set(arr));
console.log(uniqueArr); // [1, 2, 3, 4, 5]
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = arr.filter((value, index, self) => self.indexOf(value) === index);
console.log(uniqueArr); // [1, 2, 3, 4, 5]
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = arr.reduce((acc, current) => {
  if (!acc.includes(current)) {
    acc.push(current);
  }
  return acc;
}, []);
console.log(uniqueArr); // [1, 2, 3, 4, 5]
import _ from 'lodash';

const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = _.uniq(arr);
console.log(uniqueArr); // [1, 2, 3, 4, 5]
