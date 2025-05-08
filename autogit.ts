const array = [1, 2, 3, 2, 4, 3, 5];
const uniqueArray = Array.from(new Set(array));

console.log(uniqueArray); // [1, 2, 3, 4, 5]
const uniqueArray = [...new Set(array)];
const uniqueArray = array.filter((item, index) => array.indexOf(item) === index);
const array = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 1, name: 'John' }
];

const uniqueArray = Array.from(
  new Map(array.map(item => [item.id, item])).values()
);

console.log(uniqueArray);
// [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]
