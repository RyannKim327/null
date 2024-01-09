let array = [1, 2, 3, 3, 4, 4, 5];
let uniqueArray = [...new Set(array)];

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
let array = [1, 2, 3, 3, 4, 4, 5];
let uniqueArray = array.filter((value, index) => {
  return array.indexOf(value) === index;
});

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
let array = [1, 2, 3, 3, 4, 4, 5];
let uniqueArray = array.reduce((accumulator, value) => {
  if (!accumulator.includes(value)) {
    accumulator.push(value);
  }
  return accumulator;
}, []);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
