const array = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const newArray = array.filter(item => item !== elementToRemove);
console.log(newArray); // Output: [1, 2, 4, 5]
const array = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const index = array.indexOf(elementToRemove); // Get index of the element
if (index !== -1) {
    array.splice(index, 1); // Remove the element at the found index
}
console.log(array); // Output: [1, 2, 4, 5]
interface Person {
    id: number;
    name: string;
}

const people: Person[] = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];

const idToRemove = 2;

const index = people.findIndex(person => person.id === idToRemove);
if (index !== -1) {
    people.splice(index, 1); // Remove the person with the specified id
}
console.log(people); // Output: [{ id: 1, name: "Alice" }, { id: 3, name: "Charlie" }]
const array = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const newArray = array.reduce((acc, item) => {
    if (item !== elementToRemove) {
        acc.push(item);
    }
    return acc;
}, [] as number[]);
console.log(newArray); // Output: [1, 2, 4, 5]
