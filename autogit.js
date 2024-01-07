const arr = [1, 2, 3, 3, 4, 5, 5];
const uniqueArr = Array.from(new Set(arr));
console.log(uniqueArr); // [1, 2, 3, 4, 5]
const arr = [1, 2, 3, 3, 4, 5, 5];
const uniqueArr = arr.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
console.log(uniqueArr); // [1, 2, 3, 4, 5]
const arr = [1, 2, 3, 3, 4, 5, 5];
const uniqueArr = arr.reduce((unique, item) => {
  return unique.includes(item) ? unique : [...unique, item];
}, []);
console.log(uniqueArr); // [1, 2, 3, 4, 5]
