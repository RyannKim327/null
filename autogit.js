const array = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray);
const array = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArray = array.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
console.log(uniqueArray);
const array = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArray = array.reduce((acc, value) => {
  if (!acc.includes(value)) {
    acc.push(value);
  }
  return acc;
}, []);
console.log(uniqueArray);
