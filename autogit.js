const array = [1, 2, 3, 2, 4, 3, 5];
const uniqueArray = [...new Set(array)]; // using spread operator to convert set back to array
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const array = [1, 2, 3, 2, 4, 3, 5];
const uniqueArray = array.filter((element, index) => array.indexOf(element) === index);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const array = [1, 2, 3, 2, 4, 3, 5];
const uniqueArray = array.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
