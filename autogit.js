const array = [1, 2, 3, 4, 2, 1];
const uniqueArray = Array.from(new Set(array));
console.log(uniqueArray); // Output: [1, 2, 3, 4]
const array = [1, 2, 3, 4, 2, 1];
const uniqueArray = array.filter((element, index) => array.indexOf(element) === index);
console.log(uniqueArray); // Output: [1, 2, 3, 4]
const array = [1, 2, 3, 4, 2, 1];
const uniqueArray = array.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);
console.log(uniqueArray); // Output: [1, 2, 3, 4]
