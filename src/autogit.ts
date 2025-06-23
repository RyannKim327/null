let numbers: number[] = [1, 2, 3, 4, 5, 3];

// Remove all instances of the number 3
numbers = numbers.filter(num => num !== 3);

console.log(numbers); // Output: [1, 2, 4, 5]
let fruits: string[] = ['apple', 'banana', 'cherry', 'banana', 'date'];

function removeFirstInstance<T>(array: T[], value: T): void {
    const index = array.indexOf(value);
    if (index > -1) {
        array.splice(index, 1);
    }
}

removeFirstInstance(fruits, 'banana');

console.log(fruits); // Output: ['apple', 'cherry', 'banana', 'date']
interface User {
    id: number;
    name: string;
}

let users: User[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const userIdToRemove = 2;

const index = users.findIndex(user => user.id === userIdToRemove);
if (index > -1) {
    users.splice(index, 1);
}

console.log(users);
// Output: [{ id: 1, name: 'Alice' }, { id: 3, name: 'Charlie' }]
let letters: string[] = ['a', 'b', 'c', 'b', 'd'];

for (let i = letters.length - 1; i >= 0; i--) {
    if (letters[i] === 'b') {
        letters.splice(i, 1);
    }
}

console.log(letters); // Output: ['a', 'c', 'd']
npm install lodash
import _ from 'lodash';

let items: number[] = [10, 20, 30, 40, 30, 50];

_.remove(items, item => item === 30);

console.log(items); // Output: [10, 20, 40, 50]
