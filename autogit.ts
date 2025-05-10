const array = [1, 2, 3, 4, 5];
const valueToRemove = 3;

const newArray = array.filter(item => item !== valueToRemove);

console.log(newArray); // Output: [1, 2, 4, 5]
const array = [1, 2, 3, 4, 5];
const indexToRemove = 2; // Index of the element you want to remove (3 in this case)

if (indexToRemove > -1) {
    array.splice(indexToRemove, 1);
}

console.log(array); // Output: [1, 2, 4, 5]
const array = [1, 2, 3, 4, 5];
const valueToRemove = 3;

const indexToRemove = array.indexOf(valueToRemove);

if (indexToRemove > -1) {
    array.splice(indexToRemove, 1);
}

console.log(array); // Output: [1, 2, 4, 5]
interface Item {
    id: number;
    name: string;
}

const array: Item[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];

const idToRemove = 2;

const indexToRemove = array.findIndex(item => item.id === idToRemove);

if (indexToRemove !== -1) {
    array.splice(indexToRemove, 1);
}

console.log(array); // Output: [{ id: 1, name: 'Alice' }, { id: 3, name: 'Charlie' }]
