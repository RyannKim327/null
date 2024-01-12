const array = [1, 2, 3, 4, 3, 2, 1];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray); // Output: [1, 2, 3, 4]
const array = [1, 2, 3, 4, 3, 2, 1];
const uniqueArray = array.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
console.log(uniqueArray); // Output: [1, 2, 3, 4]
