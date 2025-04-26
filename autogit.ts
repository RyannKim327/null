const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = Array.from(new Set(array));
console.log(uniqueArray); // [1, 2, 3, 4, 5]
const uniqueArray = [...new Set(array)];
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = array.filter((item, index) => array.indexOf(item) === index);
console.log(uniqueArray); // [1, 2, 3, 4, 5]
const objects = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' },
];

const seenIds = new Set();
const uniqueObjects = objects.filter(obj => {
  if (seenIds.has(obj.id)) {
    return false;
  } else {
    seenIds.add(obj.id);
    return true;
  }
});
