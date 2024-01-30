const array = [1, 2, 3, 4, 3, 2, 1];
const uniqueArray = Array.from(new Set(array));
console.log(uniqueArray); // Output: [1, 2, 3, 4]
const array = [1, 2, 3, 4, 3, 2, 1];
const uniqueArray = array.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
console.log(uniqueArray); // Output: [1, 2, 3, 4]
const array = [1, 2, 3, 4, 3, 2, 1];
const uniqueArray = array.reduce((acc, value) => {
  if (!acc.includes(value)) {
    acc.push(value);
  }
  return acc;
}, []);
console.log(uniqueArray); // Output: [1, 2, 3, 4]
