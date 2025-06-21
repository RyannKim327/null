const array = [1, 2, 3, 4, 5];
const valueToRemove = 3;

// Create a new array without the specified value
const newArray = array.filter(item => item !== valueToRemove);

console.log(newArray); // Output: [1, 2, 4, 5]
const array = [1, 2, 3, 4, 5];
const valueToRemove = 3;

// Find the index of the value to remove
const index = array.indexOf(valueToRemove);

// Remove the element if found
if (index !== -1) {
  array.splice(index, 1);
}

console.log(array); // Output: [1, 2, 4, 5]
const array = [{ id: 1 }, { id: 2 }, { id: 3 }];
const idToRemove = 2;

// Find the index of the object with the specified id
const index = array.findIndex(item => item.id === idToRemove);

// Remove the element if found
if (index !== -1) {
  array.splice(index, 1);
}

console.log(array); // Output: [{ id: 1 }, { id: 3 }]
const array = [1, 2, 3, 2, 4, 2];
const valueToRemove = 2;

const newArray = array.filter(item => item !== valueToRemove);

console.log(newArray); // Output: [1, 3, 4]
const array = [1, 2, 3, 2, 4, 2];
const valueToRemove = 2;

let index = array.indexOf(valueToRemove);
while (index !== -1) {
  array.splice(index, 1);
  index = array.indexOf(valueToRemove);
}

console.log(array); // Output: [1, 3, 4]
const array = [1, 2, 3, 4, 5];
const valueToRemove = 3;

const newArray = array.filter(item => item !== valueToRemove);

console.log(newArray); // Output: [1, 2, 4, 5]
