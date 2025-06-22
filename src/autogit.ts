const numbers: number[] = [1, 2, 3, 4, 5];
const valueToRemove = 3;

const filteredNumbers = numbers.filter(num => num !== valueToRemove);

console.log(filteredNumbers); // Output: [1, 2, 4, 5]
const fruits: string[] = ['apple', 'banana', 'cherry', 'date'];
const fruitToRemove = 'cherry';

const index = fruits.indexOf(fruitToRemove);
if (index !== -1) {
    fruits.splice(index, 1);
}

console.log(fruits); // Output: ['apple', 'banana', 'date']
interface Item {
    id: number;
    name: string;
}

const items: Item[] = [
    { id: 1, name: 'Item One' },
    { id: 2, name: 'Item Two' },
    { id: 3, name: 'Item Three' }
];

const idToRemove = 2;

const index = items.findIndex(item => item.id === idToRemove);
if (index !== -1) {
    items.splice(index, 1);
}

console.log(items);
// Output:
// [
//     { id: 1, name: 'Item One' },
//     { id: 3, name: 'Item Three' }
// ]
const numbers: number[] = [10, 20, 30, 40, 50];
const valuesToRemove = [20, 40];

const reducedNumbers = numbers.reduce((acc, num) => {
    if (!valuesToRemove.includes(num)) {
        acc.push(num);
    }
    return acc;
}, [] as number[]);

console.log(reducedNumbers); // Output: [10, 30, 50]
const letters: string[] = ['a', 'b', 'c', 'b', 'd'];
const letterToRemove = 'b';

const filteredLetters = letters.filter(letter => letter !== letterToRemove);

console.log(filteredLetters); // Output: ['a', 'c', 'd']
const letters: string[] = ['a', 'b', 'c', 'b', 'd'];
const letterToRemove = 'b';

for (let i = letters.length - 1; i >= 0; i--) {
    if (letters[i] === letterToRemove) {
        letters.splice(i, 1);
    }
}

console.log(letters); // Output: ['a', 'c', 'd']
type Todo = {
    id: number;
    task: string;
};

const todos: Todo[] = [
    { id: 1, task: 'Buy groceries' },
    { id: 2, task: 'Clean the house' },
    { id: 3, task: 'Pay bills' }
];

const todoIdToRemove = 2;

// Non-mutating approach using filter()
const updatedTodos = todos.filter(todo => todo.id !== todoIdToRemove);
console.log('Updated Todos (non-mutating):', updatedTodos);
// Output:
// [
//     { id: 1, task: 'Buy groceries' },
//     { id: 3, task: 'Pay bills' }
// ]

// Mutating approach using findIndex() and splice()
const indexToRemove = todos.findIndex(todo => todo.id === todoIdToRemove);
if (indexToRemove !== -1) {
    todos.splice(indexToRemove, 1);
}
console.log('Original Todos after mutation:', todos);
// Output:
// [
//     { id: 1, task: 'Buy groceries' },
//     { id: 3, task: 'Pay bills' }
// ]
