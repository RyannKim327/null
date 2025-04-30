const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = Array.from(new Set(array));
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const uniqueArray = [...new Set(array)];
const uniqueArray = array.filter((item, index) => array.indexOf(item) === index);
console.log(uniqueArray); // [1, 2, 3, 4, 5]
type Obj = { id: number, name: string };
const array: Obj[] = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
  { id: 1, name: 'a' },
];

const uniqueArray = array.filter((obj, index, self) =>
  index === self.findIndex((o) => o.id === obj.id && o.name === obj.name)
);

console.log(uniqueArray);
// Output: [{ id: 1, name: 'a' }, { id: 2, name: 'b' }]
