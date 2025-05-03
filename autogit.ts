const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = Array.from(new Set(array));
console.log(uniqueArray); // [1, 2, 3, 4, 5]
const uniqueArray = [...new Set(array)];
const uniqueArray = array.filter((item, index) => array.indexOf(item) === index);
const array = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' }
];

const uniqueArray = array.filter((obj, index, self) =>
  index === self.findIndex(t => t.id === obj.id)
);
