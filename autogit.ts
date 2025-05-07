const array = [1, 2, 3, 3, 4, 5, 5, 6];
const uniqueArray = Array.from(new Set(array));

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]
const array = [1, 2, 3, 3, 4, 5, 5, 6];
const uniqueArray = array.filter((value, index, self) => self.indexOf(value) === index);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]
const array = [1, 2, 3, 3, 4, 5, 5, 6];
const uniqueArray = array.reduce((accumulator, current) => {
    if (!accumulator.includes(current)) {
        accumulator.push(current);
    }
    return accumulator;
}, [] as number[]); // Specify type if needed

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]
const array = [1, 2, 3, 3, 4, 5, 5, 6];
const uniqueArray: number[] = [];

array.forEach(item => {
    if (!uniqueArray.includes(item)) {
        uniqueArray.push(item);
    }
});

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]
import _ from 'lodash';

const array = [1, 2, 3, 3, 4, 5, 5, 6];
const uniqueArray = _.uniq(array);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]
