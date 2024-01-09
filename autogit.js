const array = [1, 2, 3, 1, 2, 3];
const uniqueArray = Array.from(new Set(array));
console.log(uniqueArray);
const array = [1, 2, 3, 1, 2, 3];
const uniqueArray = array.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
console.log(uniqueArray);
const array = [1, 2, 3, 1, 2, 3];
const uniqueArray = array.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);
console.log(uniqueArray);
