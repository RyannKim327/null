const array = [1, 2, 3, 4, 5];
const valueToRemove = 3;

const newArray = array.filter(item => item !== valueToRemove);

console.log(newArray); // Output: [1, 2, 4, 5]
const array = [1, 2, 3, 4, 5];
const valueToRemove = 3;

const index = array.indexOf(valueToRemove);
if (index !== -1) {
  array.splice(index, 1); // Removes 1 element at the specified index
}

console.log(array); // Output: [1, 2, 4, 5]
const array = [1, 2, 3, 4, 5];
const valueToRemove = 3;

const index = array.indexOf(valueToRemove);
if (index !== -1) {
  const newArray = [...array.slice(0, index), ...array.slice(index + 1)];
  console.log(newArray); // Output: [1, 2, 4, 5]
}
const array = [1, 2, 3, 4, 3, 5];
const valueToRemove = 3;

for (let i = array.length - 1; i >= 0; i--) {
  if (array[i] === valueToRemove) {
    array.splice(i, 1);
  }
}

console.log(array); // Output: [1, 2, 4, 5]
