const array = [1, 1, 2, 3, 3, 4, 5, 5];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray);
[1, 2, 3, 4, 5]
const array = [1, 1, 2, 3, 3, 4, 5, 5];
const uniqueArray = array.filter((element, index) => {
  return array.indexOf(element) === index;
});
console.log(uniqueArray);
[1, 2, 3, 4, 5]
const array = [1, 1, 2, 3, 3, 4, 5, 5];
const uniqueArray = array.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);
console.log(uniqueArray);
[1, 2, 3, 4, 5]
