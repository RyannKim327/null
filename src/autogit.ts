const arrayWithDuplicates = [1, 2, 3, 4, 2, 3, 5];
const uniqueArray = [...new Set(arrayWithDuplicates)];

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const arrayWithDuplicates = [1, 2, 3, 4, 2, 3, 5];
const uniqueArray = arrayWithDuplicates.filter((item, index) => {
  return arrayWithDuplicates.indexOf(item) === index;
});

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const arrayWithDuplicates = [1, 2, 3, 4, 2, 3, 5];
const uniqueArray = arrayWithDuplicates.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
interface Item {
  id: number;
  name: string;
}

const arrayWithDuplicates: Item[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' },
];

const uniqueArray = Array.from(
  new Map(arrayWithDuplicates.map(item => [item.id, item])).values()
);

console.log(uniqueArray);
// Output: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
const uniqueArray = [...new Set(arrayWithDuplicates)];
