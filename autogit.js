const array = [1, 2, 3, 2, 4, 3, 5];
const uniqueArray = [...new Set(array)];

console.log(uniqueArray); // [1, 2, 3, 4, 5]
const array = [1, 2, 3, 2, 4, 3, 5];
const uniqueArray = array.filter((value, index, self) => self.indexOf(value) === index);

console.log(uniqueArray); // [1, 2, 3, 4, 5]
const array = [1, 2, 3, 2, 4, 3, 5];
const uniqueArray = array.reduce((result, value) => {
  if (!result.includes(value)) {
    result.push(value);
  }
  return result;
}, []);

console.log(uniqueArray); // [1, 2, 3, 4, 5]
