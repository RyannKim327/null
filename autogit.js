const array = [1, 2, 3, 4, 4, 5, 6, 6, 7];
const uniqueArray = Array.from(new Set(array));
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6, 7]
const array = [1, 2, 3, 4, 4, 5, 6, 6, 7];
const uniqueArray = array.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6, 7]
const array = [1, 2, 3, 4, 4, 5, 6, 6, 7];
const uniqueArray = array.reduce((accumulator, currentValue) => {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6, 7]
