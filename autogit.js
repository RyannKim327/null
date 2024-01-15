const array = ['a', 'b', 'a', 'c', 'd', 'b'];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray);
const array = ['a', 'b', 'a', 'c', 'd', 'b'];
const uniqueArray = array.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
console.log(uniqueArray);
const array = ['a', 'b', 'a', 'c', 'd', 'b'];
const uniqueArray = array.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);
console.log(uniqueArray);
