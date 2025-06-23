const arrayWithDuplicates = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArray = [...new Set(arrayWithDuplicates)];

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]
const arrayWithDuplicates = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArray = arrayWithDuplicates.filter((item, index) => {
  return arrayWithDuplicates.indexOf(item) === index;
});

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]
const arrayWithDuplicates = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArray = arrayWithDuplicates.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}, [] as number[]);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]
interface Item {
  id: number;
  name: string;
}

const arrayWithDuplicates: Item[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" },
];

const uniqueArray = Array.from(
  new Map(arrayWithDuplicates.map(item => [item.id, item])).values()
);

console.log(uniqueArray);
// Output: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
import _ from 'lodash';

const arrayWithDuplicates = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArray = _.uniq(arrayWithDuplicates);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]
import _ from 'lodash';

const arrayWithDuplicates = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" },
];

const uniqueArray = _.uniqBy(arrayWithDuplicates, 'id');

console.log(uniqueArray);
// Output: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
