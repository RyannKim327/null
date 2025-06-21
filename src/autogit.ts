const arrayWithDuplicates = [1, 2, 3, 2, 4, 1, 5];
const uniqueArray = [...new Set(arrayWithDuplicates)];

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const arrayWithDuplicates = [1, 2, 3, 2, 4, 1, 5];

const uniqueArray = arrayWithDuplicates.filter((value, index, array) => {
    return array.indexOf(value) === index;
});

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const arrayWithDuplicates = [1, 2, 3, 2, 4, 1, 5];

const uniqueArray = arrayWithDuplicates.reduce((accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
        accumulator.push(currentValue);
    }
    return accumulator;
}, [] as number[]);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
interface Item {
    id: number;
    name: string;
}

const arrayWithDuplicates: Item[] = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 1, name: "Alice" },
    { id: 3, name: "Charlie" },
];

const uniqueArray = Array.from(
    new Map(arrayWithDuplicates.map(item => [item.id, item])).values()
);

console.log(uniqueArray);
// Output: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }, { id: 3, name: "Charlie" }]
import _ from 'lodash';

const arrayWithDuplicates = [1, 2, 3, 2, 4, 1, 5];
const uniqueArray = _.uniq(arrayWithDuplicates);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
