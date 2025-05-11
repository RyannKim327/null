const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = Array.from(new Set(arr));
console.log(uniqueArr); // [1, 2, 3, 4, 5]
const uniqueArr = [...new Set(arr)];
const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
const arr = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
  { id: 1, name: 'a' }
];

const uniqueArr = Array.from(
  new Map(arr.map(item => [item.id, item])).values()
);

console.log(uniqueArr);
// [{ id: 1, name: 'a' }, { id: 2, name: 'b' }]
