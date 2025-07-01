const numbers: number[] = [1, 2, 3, 4, 5];
const valueToRemove = 3;

// Create a new array excluding the value to remove
const updatedNumbers = numbers.filter(num => num !== valueToRemove);

console.log(updatedNumbers); // Output: [1, 2, 4, 5]
const fruits: string[] = ['apple', 'banana', 'cherry', 'date'];
const fruitToRemove = 'cherry';

// Find the index of the element to remove
const index = fruits.indexOf(fruitToRemove);

if (index !== -1) {
  // Remove the element at the found index
  fruits.splice(index, 1);
}

console.log(fruits); // Output: ['apple', 'banana', 'date']
interface Person {
  id: number;
  name: string;
}

const people: Person[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

const personIdToRemove = 2;

// Create a new array excluding the object with the specified ID
const updatedPeople = people.filter(person => person.id !== personIdToRemove);

console.log(updatedPeople);
// Output: [{ id: 1, name: 'Alice' }, { id: 3, name: 'Charlie' }]
const index = people.findIndex(person => person.id === personIdToRemove);

if (index !== -1) {
  people.splice(index, 1);
}

console.log(people);
// Output: [{ id: 1, name: 'Alice' }, { id: 3, name: 'Charlie' }]
const numbers: number[] = [1, 2, 3, 4, 3, 5];
const valueToRemove = 3;

const updatedNumbers = numbers.filter(num => num !== valueToRemove);

console.log(updatedNumbers); // Output: [1, 2, 4, 5]
let index = numbers.indexOf(valueToRemove);

while (index !== -1) {
  numbers.splice(index, 1);
  index = numbers.indexOf(valueToRemove);
}

console.log(numbers); // Output: [1, 2, 4, 5]
import _ from 'lodash';

const numbers: number[] = [1, 2, 3, 4, 5];
const valueToRemove = 3;

_.remove(numbers, num => num === valueToRemove);

console.log(numbers); // Output: [1, 2, 4, 5]
type Item = { id: number; name: string };

const items: Item[] = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

// Remove item with id = 2 (immutable)
const updatedItems = items.filter(item => item.id !== 2);
console.log('Updated Items (Immutable):', updatedItems);

// Remove item with id = 2 (mutable)
const index = items.findIndex(item => item.id === 2);
if (index !== -1) {
  items.splice(index, 1);
}
console.log('Original Items (Mutable):', items);
