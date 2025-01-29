const numbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = Array.from(new Set(numbers));
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
const numbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = numbers.filter((item, index, array) => {
  return array.indexOf(item) === index;
});
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
const numbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = numbers.reduce((acc, current) => {
  if (!acc.includes(current)) {
    acc.push(current);
  }
  return acc;
}, []);
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
const numbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = [];
numbers.forEach((number) => {
  if (uniqueNumbers.lastIndexOf(number) === -1) {
    uniqueNumbers.push(number);
  }
});
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
