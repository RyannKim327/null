const numbers: number[] = [1, 2, 3, 4, 5];
const valueToRemove: number = 3;

const updatedNumbers = numbers.filter(num => num !== valueToRemove);

console.log(updatedNumbers); // Output: [1, 2, 4, 5]
const fruits: string[] = ['apple', 'banana', 'cherry', 'date'];
const fruitToRemove: string = 'banana';

const index = fruits.indexOf(fruitToRemove);
if (index !== -1) {
    fruits.splice(index, 1);
}

console.log(fruits); // Output: ['apple', 'cherry', 'date']
interface User {
    id: number;
    name: string;
}

const users: User[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const userIdToRemove: number = 2;

const index = users.findIndex(user => user.id === userIdToRemove);
if (index !== -1) {
    users.splice(index, 1);
}

console.log(users);
// Output:
// [
//     { id: 1, name: 'Alice' },
//     { id: 3, name: 'Charlie' }
// ]
const colors: string[] = ['red', 'green', 'blue'];
const colorToRemove: string = 'green';

const index = colors.indexOf(colorToRemove);
if (index !== -1) {
    delete colors[index];
}

console.log(colors); // Output: ['red', undefined, 'blue']
console.log(colors.length); // Output: 3
const letters: string[] = ['a', 'b', 'c', 'd', 'e'];
const letterToRemove: string = 'c';

const updatedLetters = [
    ...letters.slice(0, letters.indexOf(letterToRemove)),
    ...letters.slice(letters.indexOf(letterToRemove) + 1)
];

console.log(updatedLetters); // Output: ['a', 'b', 'd', 'e']
function removeElement<T>(
    array: T[],
    elementToRemove: T,
    mutateOriginal: boolean = false
): T[] {
    if (mutateOriginal) {
        const index = array.indexOf(elementToRemove);
        if (index !== -1) {
            array.splice(index, 1);
        }
        return array;
    } else {
        return array.filter(item => item !== elementToRemove);
    }
}

// Usage Examples:

const originalArray = [10, 20, 30, 40, 50];
const element = 30;

// Immutable removal
const newArray = removeElement(originalArray, element);
console.log(newArray); // Output: [10, 20, 40, 50]
console.log(originalArray); // Output: [10, 20, 30, 40, 50]

// Mutable removal
removeElement(originalArray, element, true);
console.log(originalArray); // Output: [10, 20, 40, 50]
