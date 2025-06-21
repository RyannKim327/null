const numbers: number[] = [1, 2, 3, 4, 5];
const valueToRemove: number = 3;

// Create a new array excluding the value to remove
const filteredNumbers = numbers.filter(num => num !== valueToRemove);

console.log(filteredNumbers); // Output: [1, 2, 4, 5]
const fruits: string[] = ['apple', 'banana', 'cherry', 'banana'];
const fruitToRemove: string = 'banana';

// Find the index of the element to remove
const index = fruits.indexOf(fruitToRemove);

if (index !== -1) {
  // Remove the element at the found index
  fruits.splice(index, 1);
}

console.log(fruits); // Output: ['apple', 'cherry', 'banana']
const colors: string[] = ['red', 'blue', 'green', 'blue', 'yellow'];
const colorToRemove: string = 'blue';

for (let i = colors.length - 1; i >= 0; i--) {
  if (colors[i] === colorToRemove) {
    colors.splice(i, 1);
  }
}

console.log(colors); // Output: ['red', 'green', 'yellow']
const uniqueNumbers: number[] = [1, 2, 3, 4];
const numberToRemove: number = 3;

// Convert to Set, remove the element, and convert back to Array
const resultSet = new Set(uniqueNumbers);
resultSet.delete(numberToRemove);
const resultArray = Array.from(resultSet);

console.log(resultArray); // Output: [1, 2, 4]
import _ from 'lodash';

const animals: string[] = ['cat', 'dog', 'elephant', 'dog'];
_.remove(animals, animal => animal === 'dog');

console.log(animals); // Output: ['cat', 'elephant']
import _ from 'lodash';

const animals: string[] = ['cat', 'dog', 'elephant', 'dog'];
const filteredAnimals = _.without(animals, 'dog');

console.log(filteredAnimals); // Output: ['cat', 'elephant']
const books: string[] = ['Harry Potter', 'Lord of the Rings', 'Harry Potter', '1984'];

// Remove all occurrences of 'Harry Potter' using filter()
const filteredBooks = books.filter(book => book !== 'Harry Potter');
console.log(filteredBooks); // Output: ['Lord of the Rings', '1984']

// Remove the first occurrence of '1984' using indexOf() and splice()
const index = books.indexOf('1984');
if (index !== -1) {
  books.splice(index, 1);
}
console.log(books); // Output: ['Harry Potter', 'Lord of the Rings', 'Harry Potter']
