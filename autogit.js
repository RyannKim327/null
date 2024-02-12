const array = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArray = [...new Set(array)];

console.log(uniqueArray); // [1, 2, 3, 4, 5, 6]
const array = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArray = array.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

console.log(uniqueArray); // [1, 2, 3, 4, 5, 6]
const array = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArray = array.reduce((accumulator, current) => {
  if (!accumulator.includes(current)) {
    accumulator.push(current);
  }
  return accumulator;
}, []);

console.log(uniqueArray); // [1, 2, 3, 4, 5, 6]
