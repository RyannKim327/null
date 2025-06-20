const array = [1, 2, 3, 4, 3];
const elementToRemove = 3;

// Remove all occurrences of `elementToRemove`
const updatedArray = array.filter(item => item !== elementToRemove);

console.log(updatedArray); // Output: [1, 2, 4]
const array = [1, 2, 3, 4];
const elementToRemove = 3;

// Find the index of the element
const index = array.indexOf(elementToRemove);

if (index !== -1) {
  // Remove the element at the found index
  array.splice(index, 1);
}

console.log(array); // Output: [1, 2, 4]
type Item = { id: number; name: string };

const array: Item[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

const idToRemove = 2;

// Find the index of the object with the specified `id`
const index = array.findIndex(item => item.id === idToRemove);

if (index !== -1) {
  // Remove the object at the found index
  array.splice(index, 1);
}

console.log(array);
// Output: [{ id: 1, name: 'Alice' }, { id: 3, name: 'Charlie' }]
const array = [1, 2, 3, 4, 3];
const elementToRemove = 3;

// Create a new array excluding `elementToRemove`
const updatedArray = array.reduce((acc, item) => {
  if (item !== elementToRemove) {
    acc.push(item);
  }
  return acc;
}, [] as number[]);

console.log(updatedArray); // Output: [1, 2, 4]
const updatedArray = array.filter(item => item !== elementToRemove);
