const array = [1, 2, 3, 4, 4, 5, 6, 5];
const uniqueArray = array.filter((element, index, self) => {
  return index === self.indexOf(element);
});

console.log(uniqueArray);
// Output: [1, 2, 3, 4, 5, 6]
const array = [1, 2, 3, 4, 4, 5, 6, 5];
const uniqueArray = [...new Set(array)];

console.log(uniqueArray);
// Output: [1, 2, 3, 4, 5, 6]
const array = [1, 2, 3, 4, 4, 5, 6, 5];
const uniqueArray = array.reduce((accumulator, element) => {
  if (!accumulator.includes(element)) {
    accumulator.push(element);
  }
  return accumulator;
}, []);

console.log(uniqueArray);
// Output: [1, 2, 3, 4, 5, 6]
