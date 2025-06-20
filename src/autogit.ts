const arrayWithDuplicates: number[] = [1, 2, 3, 2, 4, 1];
const uniqueArray = Array.from(new Set(arrayWithDuplicates));

console.log(uniqueArray); // Output: [1, 2, 3, 4]
const arrayWithDuplicates: number[] = [1, 2, 3, 2, 4, 1];
const uniqueArray = arrayWithDuplicates.filter((item, index) => 
  arrayWithDuplicates.indexOf(item) === index
);

console.log(uniqueArray); // Output: [1, 2, 3, 4]
const arrayWithDuplicates: number[] = [1, 2, 3, 2, 4, 1];
const uniqueArray = arrayWithDuplicates.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}, [] as number[]);

console.log(uniqueArray); // Output: [1, 2, 3, 4]
interface Person {
  id: number;
  name: string;
}

const arrayWithDuplicates: Person[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" },
];

const uniqueArray = Object.values(
  arrayWithDuplicates.reduce((acc, item) => {
    acc[item.id] = item; // Use a unique key (e.g., id) to avoid duplicates
    return acc;
  }, {} as Record<number, Person>)
);

console.log(uniqueArray);
// Output: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
import _ from 'lodash';

const arrayWithDuplicates: number[] = [1, 2, 3, 2, 4, 1];
const uniqueArray = _.uniq(arrayWithDuplicates);

console.log(uniqueArray); // Output: [1, 2, 3, 4]
const uniqueArray = Array.from(new Set(arrayWithDuplicates));
