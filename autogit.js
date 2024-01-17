const array = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]
const array = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArray = array.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]
const array = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArray = [];
for (let i = 0; i < array.length; i++) {
  if (!uniqueArray.includes(array[i])) {
    uniqueArray.push(array[i]);
  }
}
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]
