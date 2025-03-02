const array = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const newArray = array.filter(item => item !== elementToRemove);
console.log(newArray); // Output: [1, 2, 4, 5]
const array = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const index = array.indexOf(elementToRemove);
if (index !== -1) {
    array.splice(index, 1);
}
console.log(array); // Output: [1, 2, 4, 5]
interface Item {
    id: number;
    name: string;
}

const array: Item[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
];

const idToRemove = 2;
const index = array.findIndex(item => item.id === idToRemove);
if (index !== -1) {
    array.splice(index, 1);
}
console.log(array); // Output: [{ id: 1, name: 'Item 1' }, { id: 3, name: 'Item 3' }]
