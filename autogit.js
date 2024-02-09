const array = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray);  // Output: [1, 2, 3, 4, 5, 6]
const array = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArray = array.filter((value, index, self) => self.indexOf(value) === index);
console.log(uniqueArray);  // Output: [1, 2, 3, 4, 5, 6]
const array = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArray = [];
const tempObject = {};
for (const item of array) {
  if (!tempObject[item]) {
    uniqueArray.push(item);
    tempObject[item] = true;
  }
}
console.log(uniqueArray);  // Output: [1, 2, 3, 4, 5, 6]
