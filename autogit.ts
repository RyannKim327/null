const arr = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const newArr = arr.filter(item => item !== elementToRemove);
console.log(newArr); // Output: [1, 2, 4, 5]
const arr = [1, 2, 3, 4, 5];
const elementToRemove = 3;
const index = arr.indexOf(elementToRemove);

if (index !== -1) {
  arr.splice(index, 1);
}

console.log(arr); // Output: [1, 2, 4, 5]
const arr = [1, 2, 3, 4, 5];
const elementToRemove = 3;
const index = arr.indexOf(elementToRemove);

if (index !== -1) {
  const newArr = [...arr.slice(0, index), ...arr.slice(index + 1)];
  console.log(newArr); // Output: [1, 2, 4, 5]
}
