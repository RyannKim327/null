const array = [1, 2, 3, 4, 2, 1, 5];
const uniqueArray = Array.from(new Set(array));
console.log(uniqueArray);
const array = [1, 2, 3, 4, 2, 1, 5];
const uniqueArray = array.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
console.log(uniqueArray);
const array = [1, 2, 3, 4, 2, 1, 5];
const uniqueArray = array.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);
console.log(uniqueArray);
