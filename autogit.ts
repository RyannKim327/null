const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = Array.from(new Set(arr));
console.log(uniqueArr); // [1, 2, 3, 4, 5]
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(uniqueArr); // [1, 2, 3, 4, 5]
interface Item {
  id: number;
  name: string;
}

const arr: Item[] = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
  { id: 1, name: 'c' },
];

const uniqueArr = arr.filter(
  (item, index, self) => index === self.findIndex(t => t.id === item.id)
);

console.log(uniqueArr);
// [
//   { id: 1, name: 'a' },
//   { id: 2, name: 'b' }
// ]
