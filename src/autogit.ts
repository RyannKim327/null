let numbers: number[] = [1, 2, 3, 4, 3, 5];

// Remove all occurrences of 3
let updatedNumbers = numbers.filter(num => num !== 3);

console.log(updatedNumbers); // Output: [1, 2, 4, 5]
let numbers: number[] = [1, 2, 3, 4, 3, 5];

// Find the index of the first occurrence of 3
let index = numbers.indexOf(3);

if (index !== -1) {
    // Remove the element at the found index
    numbers.splice(index, 1);
}

console.log(numbers); // Output: [1, 2, 4, 3, 5]
type Item = { id: number; name: string };

let items: Item[] = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' }
];

// Remove the item with id === 2
let index = items.findIndex(item => item.id === 2);

if (index !== -1) {
    items.splice(index, 1);
}

console.log(items);
// Output: [{ id: 1, name: 'Apple' }, { id: 3, name: 'Cherry' }]
let numbers: number[] = [1, 2, 3, 4, 3, 5];

// Remove all occurrences of 3
for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] === 3) {
        numbers.splice(i, 1);
    }
}

console.log(numbers); // Output: [1, 2, 4, 5]
let numbers: number[] = [1, 2, 3, 4, 3, 5];

numbers = numbers.filter(num => num !== 3);

console.log(numbers); // Output: [1, 2, 4, 5]
type Product = {
    id: number;
    name: string;
};

let products: Product[] = [
    { id: 101, name: 'Laptop' },
    { id: 102, name: 'Smartphone' },
    { id: 103, name: 'Tablet' },
    { id: 102, name: 'Smartphone' } // Duplicate
];

// Function to remove the first occurrence by ID
function removeFirstById(arr: Product[], idToRemove: number): void {
    let index = arr.findIndex(product => product.id === idToRemove);
    if (index !== -1) {
        arr.splice(index, 1);
    }
}

// Function to remove all occurrences by ID
function removeAllById(arr: Product[], idToRemove: number): Product[] {
    return arr.filter(product => product.id !== idToRemove);
}

// Remove the first Smartphone (id: 102)
removeFirstById(products, 102);
console.log('After removing first occurrence:', products);
// Output: [{ id: 101, name: 'Laptop' }, { id: 103, name: 'Tablet' }, { id: 102, name: 'Smartphone' }]

// Remove all Smartphones (id: 102)
products = removeAllById(products, 102);
console.log('After removing all occurrences:', products);
// Output: [{ id: 101, name: 'Laptop' }, { id: 103, name: 'Tablet' }]
