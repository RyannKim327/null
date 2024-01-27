const array = [1, 2, 3, 2, 4, 1, 5];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const array = [1, 2, 3, 2, 4, 1, 5];
const uniqueArray = array.filter((value, index, arr) => arr.indexOf(value) === index);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const array = [1, 2, 3, 2, 4, 1, 5];
const uniqueArray = array.reduce((accumulator, value) => {
  if (!accumulator.includes(value)) {
    accumulator.push(value);
  }
  return accumulator;
}, []);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const array = [1, 2, 3, 2, 4, 1, 5];
const uniqueArray = [];
for (let i = 0; i < array.length; i++) {
  if (uniqueArray.indexOf(array[i]) === -1) {
    uniqueArray.push(array[i]);
  }
}
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
