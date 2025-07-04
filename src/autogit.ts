const originalArray = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const newArray = originalArray.filter(item => item !== elementToRemove);

console.log(newArray); // Output: [1, 2, 4, 5]
const originalArray = [1, 2, 3, 4, 5];
const elementToRemove = 3;

// Find the index of the element
const index = originalArray.indexOf(elementToRemove);

if (index !== -1) {
    originalArray.splice(index, 1); // Remove 1 element at the found index
}

console.log(originalArray); // Output: [1, 2, 4, 5]
interface Item {
    id: number;
    name: string;
}

const originalArray: Item[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
];

const idToRemove = 2;

// Find the index of the object with the specified id
const index = originalArray.findIndex(item => item.id === idToRemove);

if (index !== -1) {
    originalArray.splice(index, 1); // Remove the item if found
}

console.log(originalArray); // Output: [{ id: 1, name: 'Item 1' }, { id: 3, name: 'Item 3' }]
const originalArray = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const newArray = originalArray.reduce((acc, item) => {
    if (item !== elementToRemove) {
        acc.push(item);
    }
    return acc;
}, [] as number[]);

console.log(newArray); // Output: [1, 2, 4, 5]
